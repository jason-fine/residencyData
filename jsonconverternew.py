import json
import os

data = """
Anesthesiology: 1,199 6.5 1,054 5.7 1,024 5.6 936 5.2 907 5.1
Child Neurology: 125 0.7 102 0.6 100 0.5 111 0.6 102 0.6
Dermatology: 21 0.1 24 0.1 25 0.1 23 0.1 23 0.1
Emergency Medicine: 1,274 6.9 1,593 8.6 1,765 9.6 1,713 9.5 1,617 9.1
Emergency Med-Anesthesiology: 0 0.0 1 0.0 2 0.0 0 0.0 0 0.0
Emergency Med-Family Med: 4 0.0 4 0.0 5 0.0 2 0.0 1 0.0
Family Medicine: 1,484 8.0 1,541 8.3 1,606 8.7 1,543 8.5 1,601 9.0
Family Med-Preventive Med: 2 0.0 0 0.0 1 0.0 2 0.0 3 0.0
Internal Medicine (Categorical): 3,592 19.4 3,491 18.9 3,523 19.1 3,496 19.3 3,366 18.9
Medicine-Anesthesiology: 4 0.0 2 0.0 4 0.0 3 0.0 4 0.0
Medicine-Dermatology: 7 0.0 7 0.0 7 0.0 5 0.0 6 0.0
Medicine-Emergency Med: 14 0.1 22 0.1 19 0.1 19 0.1 20 0.1
Medicine-Medical Genetics: 2 0.0 3 0.0 3 0.0 2 0.0 1 0.0
Medicine-Pediatrics: 307 1.7 332 1.8 313 1.7 316 1.7 315 1.8
Medicine-Preliminary (PGY-1 Only): 1,205 6.5 1,261 6.8 1,210 6.6 1,313 7.3 1,356 7.6
Medicine-Preventive Med: 3 0.0 5 0.0 2 0.0 4 0.0 2 0.0
Medicine-Primary: 246 1.3 248 1.3 251 1.4 247 1.4 239 1.3
Medicine-Psychiatry: 24 0.1 20 0.1 22 0.1 18 0.1 18 0.1
Interventional Radiology (Integrated): 37 0.2 37 0.2 30 0.2 25 0.1 30 0.2
Neurodevelopmental Disabilities: 5 0.0 3 0.0 3 0.0 3 0.0 3 0.0
Neurological Surgery: 211 1.1 202 1.1 198 1.1 203 1.1 213 1.2
Neurology: 461 2.5 393 2.1 358 1.9 317 1.8 284 1.6
Obstetrics-Gynecology: 1,102 6.0 1,106 6.0 1,088 5.9 1,089 6.0 1,049 5.9
OB/GYN-Preliminary (PGY-1 Only): 4 0.0 4 0.0 6 0.0 3 0.0 4 0.0
Orthopedic Surgery: 690 3.7 705 3.8 699 3.8 686 3.8 693 3.9
Osteo Neuromusculoskeletal Med: 0 0.0 0 0.0 0 0.0 0 0.0 0 0.0
Otolaryngology: 310 1.7 316 1.7 310 1.7 310 1.7 308 1.7
Pathology: 242 1.3 231 1.2 198 1.1 204 1.1 201 1.1
Pediatrics (Categorical): 1,635 8.8 1,661 9.0 1,749 9.5 1,731 9.6 1,715 9.7
Pediatrics-Anesthesiology: 7 0.0 6 0.0 8 0.0 7 0.0 6 0.0
Pediatrics-Emergency Med: 6 0.0 6 0.0 7 0.0 5 0.0 6 0.0
Pediatrics-Medical Genetics: 17 0.1 18 0.1 19 0.1 13 0.1 14 0.1
Pediatrics-P M & R: 4 0.0 3 0.0 2 0.0 2 0.0 2 0.0
Pediatrics-Preliminary: 14 0.1 16 0.1 16 0.1 9 0.0 12 0.1
Pediatrics-Primary: 22 0.1 31 0.2 39 0.2 36 0.2 36 0.2
Peds/Psych/Child Psych: 20 0.1 20 0.1 19 0.1 20 0.1 20 0.1
Physical Medicine & Rehab: 118 0.6 104 0.6 88 0.5 81 0.4 69 0.4
Plastic Surgery (Integrated): 191 1.0 173 0.9 167 0.9 165 0.9 158 0.9
Psychiatry: 1,343 7.3 1,253 6.8 1,205 6.5 1,138 6.3 1,054 5.9
Psychiatry-Family Medicine: 9 0.0 10 0.1 11 0.1 10 0.1 12 0.1
Psychiatry-Neurology: 2 0.0 2 0.0 1 0.0 2 0.0 3 0.0
Radiation Oncology: 6 0.0 7 0.0 7 0.0 8 0.0 13 0.1
Radiology-Diagnostic: 90 0.5 73 0.4 71 0.4 50 0.3 73 0.4
Surgery (Categorical): 1,062 5.7 1,059 5.7 1,029 5.6 1,033 5.7 1,053 5.9
Surgery-Preliminary (PGY-1 Only): 246 1.3 304 1.6 272 1.5 290 1.6 277 1.6
Thoracic Surgery: 41 0.2 41 0.2 43 0.2 32 0.2 34 0.2
Transitional (PGY-1 Only): 1,015 5.5 920 5.0 845 4.6 822 4.5 788 4.4
Vascular Surgery: 75 0.4 72 0.4 65 0.4 61 0.3 52 0.3
"""

match_summary = {
    "year": 2019,
    "results": {}

}

lines = data.strip().split('\n')
for line in lines:
    fields = line.split()
    specialty = " ".join(fields[:-10])
    match_summary["results"][specialty] = {
        "Number_Matched": int(fields[-2].replace(",", "")),  
        "Percentage_of_Matches": float(fields[-1].replace(",", "")),
    }

json_data = json.dumps(match_summary, indent=2)

print(json_data)

with open('match_summary.json', 'w') as json_file:
    json_file.write(json_data)

old_filename = "match_summary.json"
new_filename = f"{match_summary['year']}.json"
os.rename(old_filename, new_filename)