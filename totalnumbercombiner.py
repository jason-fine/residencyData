import os
import json

# Directory containing JSON files
directory = "numbers_jsons"

# Initialize an empty dictionary to store combined data
combined_data = {}

# Iterate over files in the directory
for filename in os.listdir(directory):
    # Check if the file is a JSON file
    if filename.endswith(".json"):
        # Extract the year from the filename
        year = os.path.splitext(filename)[0]
        
        # Read the JSON file
        with open(os.path.join(directory, filename), "r") as file:
            data = json.load(file)
            
            # Add the data to combined_data with the year as the key
            combined_data[year] = data

# Write the combined data to a single JSON file
output_filename = "combined_data.json"
with open(output_filename, "w") as outfile:
    json.dump(combined_data, outfile, indent=4)

print(f"Combined data saved to {output_filename}")
