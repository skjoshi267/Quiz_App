import streamlit as st
import pandas as pd
import plotly.express as px

data = pd.read_csv('Combined Scores.csv')

# Fill null values
data["Type"] = data["Type"].fillna("Neutral").astype(str).str.strip().str.capitalize()
data["Name"] = data["Name"].fillna("Unknown").astype(str).str.strip().str.capitalize()
data["Category"] = data["Category"].fillna("Unknown").astype(str).str.strip().str.capitalize()
data["Total Score (points)"] = data["Total Score (points)"].fillna(0).astype(int)

st.title("Category Points Dashboard")

# Dropdown for category
selected_category = st.selectbox(
    "Select Category",
    sorted(data["Category"].unique())
)

# Filter dataframe
filtered_df = data[data["Category"] == selected_category][["Name", "Total Score (points)", "Type", "Category"]]

# Color mapping
color_map = {
    "Strength": "#1A5B38",
    "Weakness": "#D6412D",
    "Neutral": "#CCBB05"
}

st.header(f"{selected_category}")

fig = px.bar(
    filtered_df,
    x="Name",
    y="Total Score (points)",
    color="Type",
    color_discrete_map=color_map,
    text="Total Score (points)",
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
    range=[0, 8000]
)

# Show values on bars
fig.update_traces(textposition="outside")

st.plotly_chart(fig, width='stretch')