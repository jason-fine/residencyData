import json

data = """
Anesthesiology 907 116 123 48 1,030 164 6.1 2.3 11.9 29.3
Child Neurology 106 15 1 0 107 15 0.7 0.3 0.9 0.0
Dermatology 115 11 25 10 140 21 0.8 0.2 17.9 47.6
Emergency Medicine 1,186 637 8 4 1,194 641 7.9 12.6 0.7 0.6
Family Medicine 1,363 1,259 13 22 1,376 1,281 9.1 24.9 0.9 1.7
Internal Medicine 3,572 1,391 41 44 3,613 1,435 23.9 27.6 1.1 3.1
Internal Medicine (Prelim) 212 5 3 0 215 5 1.4 0.1 1.4 0.0
Internal Medicine/Emergency Medicine 0 0 0 0 0 0 0.0 0.0 0.0 0.0
Internal Medicine/Pediatrics 210 19 5 0 215 19 1.4 0.4 2.3 0.0
Internal Medicine/Psychiatry 1 0 0 0 1 0 0.0 0.0 0.0 0.0
Interventional Radiology 6 0 0 0 6 0 0.0 0.0 0.0 0.0
Neurological Surgery 197 3 40 2 237 5 1.3 0.1 16.9 40.0
Neurology 526 128 12 13 538 141 3.5 2.5 2.2 9.2
Obstetrics and Gynecology 896 164 118 52 1,014 216 6.0 3.2 11.6 24.1
Orthopaedic Surgery 632 95 186 63 818 158 4.2 1.9 22.7 39.9
Osteopathic Neuromusculoskeletal Medicine 0 4 0 0 0 4 0.0 0.1 0.0 0.0
Otolaryngology 269 13 37 5 306 18 1.8 0.3 12.1 27.8
Pathology-Anatomic and Clinical 232 79 11 13 243 92 1.6 1.6 4.5 14.1
Pediatrics 1,580 527 14 8 1,594 535 10.6 10.4 0.9 1.5
Pediatrics (Prelim) 0 0 0 0 0 0 0.0 0.0 0.0 0.0
Pediatrics/Medical Genetics 3 0 0 0 3 0 0.0 0.0 0.0 0.0
Pediatrics/Psychiatry/Child and Adolescent Psychiatry 0 0 0 0 0 0 0.0 0.0 0.0 0.0
Physical Medicine and Rehabilitation 183 90 21 28 204 118 1.2 1.8 10.3 23.7
Plastic Surgery 143 0 31 0 174 0 1.0 0.0 17.8 0.0
Psychiatry 1,190 300 114 59 1,304 359 8.0 5.9 8.7 16.4
Radiation Oncology 90 5 1 0 91 5 0.6 0.1 1.1 0.0
Radiology-Diagnostic 418 31 53 17 471 48 2.8 0.6 11.3 35.4
Surgery-General 794 144 107 73 901 217 5.3 2.9 11.9 33.6
Surgery-General (Prelim) 44 3 6 4 50 7 0.3 0.1 12.0 57.1
Thoracic Surgery 3 0 1 0 4 0 0.0 0.0 25.0 0.0
Vascular Surgery 43 0 0 1 43 1 0.3 0.0 0.0 100.0
Totay PGY-1 14,967 5,048 972 467 15,939 5,515 100.0 100.0 6.1 8.5
"""

specialties = []
for line in data.split('\n'):
    if line.strip() == "":
        continue
    parts = line.split()
    specialty = {
        "Specialty": " ".join(parts[:-10]),
        "Matched MDs": int(parts[-10].replace(',', '')),
        "Matched DOs": int(parts[-9].replace(',', '')),
        "Unmatched MDs": int(parts[-8].replace(',', '')),
        "Unmatched DOs": int(parts[-7].replace(',', '')),
        "Total MDs": int(parts[-6].replace(',', '')),
        "Total DOs": int(parts[-5].replace(',', '')),
        "% Matched Applicants MDs": float(parts[-4]),
        "% Unmatched MDs": float(parts[-3]),
        "% Matched Applicants DOs": float(parts[-2]),
        "% Unmatched DOs": float(parts[-1])
    }
    specialties.append(specialty)



# Creating the JSON object
json_data = json.dumps({specialty["Specialty"]: specialty for specialty in specialties}, indent=2)
print(json_data)

with open('total_match_summary.json', 'w') as json_file:
    json_file.write(json_data)