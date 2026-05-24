import streamlit as st
import pandas as pd
import plotly.express as px

data = pd.read_csv('Combined Scores.csv')

# Fill null values
data["Type"] = data["Type"].fillna("Neutral").astype(str).str.strip().str.capitalize()
data["Tag"] = data["Tag"].fillna("Unknown").astype(str).str.strip().str.capitalize()
data["Category"] = data["Category"].fillna("Unknown").astype(str).str.strip().str.capitalize()
data["Total score (points)"] = data["Total score (points)"].fillna(0).astype(int)

st.title("Category Points Dashboard")

# Dropdown for category
selected_category = st.selectbox(
    "Select Category",
    sorted(data["Category"].unique())
)

# Filter dataframe
filtered_df = data[data["Category"] == selected_category][["Tag", "Total score (points)", "Type", "Category"]]
# Sort dataframe by 'Values' from highest to lowest
df_sorted_fil = filtered_df.sort_values(by="Total score (points)", ascending=False)

# Color mapping
color_map = {
    "Strength": "#1A5B38",
    "Weakness": "#D6412D",
    "Neutral": "#CCBB05"
}

st.header(f"{selected_category}")

fig = px.bar(
    df_sorted_fil,
    x="Tag",
    y="Total score (points)",
    color="Type",
    color_discrete_map=color_map,
    text="Total score (points)",
    title=f"Points by Player"
)

# Bigger chart size (important for laptop view)
fig.update_layout(
    width=1100,
    height=650,
    xaxis_title="Player",
    yaxis_title="Points",
    bargap=0.3
)

# Force Y-axis scale up to 10,000
fig.update_yaxes(
    range=[0, 10000]
)

# Show values on bars
fig.update_traces(textposition="outside")

st.plotly_chart(fig, width='stretch')

total_df = data[["Tag", "Total score (points)"]].groupby("Tag").sum().reset_index()
# Sort dataframe by 'Values' from highest to lowest
df_sorted = total_df.sort_values(by="Total score (points)", ascending=False)

# Create the bar chart with automated text labels
fig = px.bar(df_sorted, x="Tag", y="Total score (points)", text_auto=",d", color_discrete_sequence=["#1A5B38"])
# Force labels to be horizontal (0 degrees) and place them outside or inside the bar
fig.update_traces(textangle=0, textposition="outside")

# Render in Streamlit
st.plotly_chart(fig, width='stretch')