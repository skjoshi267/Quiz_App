"""
Quiz App – local score calculator
Run:  python calc_score.py
"""

import pandas as pd
import glob

def calc_scores():

    ## Initialize an empty Dataframe
    scores_data = pd.DataFrame()

    ## Get all Excel files in the scores directory
    glob_pattern = r"./round1/*.xlsx"
    files = glob.glob(glob_pattern)
    if not len(files):
        print(f"No files found in {glob_pattern}")
        return scores_data
    else:
        ## Loop through files
        for file in files:
            if "score.xlsx" in file:
                continue
            print(f"Processing File: {file}")
            file_data = pd.read_excel(file,sheet_name="Final Scores",engine="openpyxl",skiprows=2)
            if len(file_data) > 0:
                new_data = file_data[["Player","Total score (points)"]]
                new_data["Category"] = file.replace("./round1\\","").replace(".xlsx","").replace("Fastest Finger First","")
                new_data["Player"] = new_data["Player"].astype(str).str.strip().str.lower()
                scores_data = pd.concat([scores_data, new_data], ignore_index=True)
                # Clean join columns in df1
                scores_data["Player"] = scores_data["Player"].astype(str).str.strip().str.lower()
                scores_data["Category"] = scores_data["Category"].astype(str).str.strip().str.lower()
            else:
                continue
        return scores_data
    
def calc_preferences():
    data = pd.read_excel('./round1/score.xlsx',engine='openpyxl',sheet_name='Sheet2')

    strength_cols = [c for c in data.columns if "strength" in c.lower()]
    weakness_cols = [c for c in data.columns if "weakness" in c.lower()]
    strengths = data.melt(
                            id_vars=["Tag"],
                            value_vars=strength_cols,
                            value_name="category"
                        )
    strengths["Type"] = "Strength"
    weaknesses = data.melt(
                            id_vars=["Tag"],
                            value_vars=weakness_cols,
                            value_name="category"
                        )
    weaknesses["Type"] = "Weakness"
    result = pd.concat([strengths, weaknesses], ignore_index=True)
    result["Tag"] = result["Tag"].astype(str).str.strip().str.lower()
    result["category"] = result["category"].astype(str).str.strip().str.lower()
    return result

def main():
    
    ## Calculate scores from all Quiz Topics
    scores_data = calc_scores()
    
    if scores_data.empty:
        print("No valid scores.")
    else:
        ## Combine Scores by Player & Preferences
        pref_data = calc_preferences()
        if pref_data.empty:
            print("No valid preferences.")
        else:
            combined_data = pd.merge(scores_data, pref_data, left_on=["Player","Category"], right_on=["Tag","category"], how="left")
            combined_data.to_csv("Combined Scores.csv", index=False)
        

if __name__ == "__main__":
    
    main()