import json
import os

# Function to combine data from multiple JSON files
def combine_json_files(folder_path):
    combined_data = {}
    for filename in os.listdir(folder_path):
        if filename.endswith(".json"):
            with open(os.path.join(folder_path, filename), "r") as file:
                data = json.load(file)
                year = data['year']
                # Combine data under the year key
                combined_data[year] = data['seniors']
    return combined_data

# Path to the folder containing JSON files
folder_path = "data/md"

# Combine JSON files
combined_data = combine_json_files(folder_path)

# Write the combined data to a new JSON file
output_file = "combined_data.json"
with open(output_file, "w") as file:
    json.dump(combined_data, file, indent=2)

print(f"Combined data saved to {output_file}")
