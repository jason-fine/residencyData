import json

data = """
Anesthesiology 153 1,370 1 433 2,418 262 1,369 19.1 99.9 3,019 19,359
Child Neurology 73 159 7 25 213 20 151 12.6 95.0 196 1,760
Dermatology 14 31 0 28 239 6 31 19.4 100.0 43 367
Emergency Medicine 256 2,665 7 861 3,323 683 2,652 25.6 99.5 7,859 33,785
Emergency Med-Anesthesiology 1 0 0 0 1 0 0 0.0 0.0 0 1
Emergency Med-Family Med 3 6 0 15 39 3 6 50.0 100.0 21 53
Family Medicine 706 4,662 144 1,894 7,175 1,392 4,313 29.9 92.5 18,033 51,983
Family Medicine-ONMM 1 2 0 12 12 2 2 100.0 100.0 12 12
Family Med-Preventive Med 3 3 1 2 11 0 2 0.0 66.7 2 12
Internal Medicine (Categorical) 587 8,697 69 1,836 13,118 1,389 8,324 16.0 95.7 16,417 97,309
Medicine-Anesthesiology 2 3 0 1 19 0 3 0.0 100.0 1 21
Medicine-Dermatology 5 6 1 0 25 0 5 0.0 83.3 0 52
Medicine-Emergency Med 12 30 0 27 111 9 30 30.0 100.0 80 379
Medicine-Medical Genetics 5 4 1 0 8 0 3 0.0 75.0 0 10
Medicine-Pediatrics 77 390 4 62 606 36 381 9.2 97.7 415 4,797
Medicine-Preliminary (PGY-1 Only) 365 1,911 61 753 5,692 162 1,759 8.5 92.0 5,977 60,471
Medicine-Preventive Med 4 7 0 3 113 0 7 0.0 100.0 3 117
Medicine-Primary 85 430 3 291 2,547 41 423 9.5 98.4 454 5,498
Medicine-Psychiatry 11 23 0 11 90 0 23 0.0 100.0 20 234
Interventional Radiology (Integrated) 22 38 1 20 206 5 37 13.2 97.4 53 613
Neurodevelopmental Disabilities 4 4 0 2 20 0 4 0.0 100.0 3 41
Neurological Surgery 112 232 0 18 397 3 232 1.3 100.0 87 4,471
Neurology 126 682 11 156 1,226 103 665 15.1 97.5 1,159 7,525
Obstetrics-Gynecology 275 1,443 2 338 2,014 221 1,440 15.3 99.8 2,784 18,965
OB/GYN-Preliminary (PGY-1 Only) 15 18 6 7 211 1 9 5.6 50.0 7 301
Orthopedic Surgery 203 849 5 177 1,192 112 844 13.2 99.4 885 11,191
Osteo Neuromusculoskeletal Med 3 10 2 14 18 8 8 80.0 80.0 22 26
Otolaryngology 129 350 2 33 505 17 348 4.9 99.4 187 5,242
Pathology 164 603 11 77 917 67 587 11.1 97.3 745 6,605
Pediatrics (Categorical) 222 2,864 24 578 3,728 483 2,812 16.9 98.2 5,865 34,732
Pediatrics-Anesthesiology 5 7 0 1 21 0 7 0.0 100.0 2 52
Pediatrics-Emergency Med 4 8 0 5 36 1 8 12.5 100.0 11 84
Pediatrics-Medical Genetics 20 22 2 4 35 3 20 13.6 90.9 21 165
Pediatrics-P M & R 3 4 0 7 18 2 4 50.0 100.0 9 27
Pediatrics-Preliminary 21 19 5 5 118 0 12 0.0 63.2 6 402
Pediatrics-Primary 15 92 1 142 871 11 90 12.0 97.8 168 1,154
Peds/Psych/Child Psych 9 22 0 3 64 1 22 4.5 100.0 7 221
Physical Medicine & Rehab 39 151 0 206 550 60 151 39.7 100.0 821 2,255
Plastic Surgery (Integrated) 84 180 0 13 291 0 180 0.0 100.0 48 2,990
Preventive Medicine 1 1 0 1 17 0 1 0.0 100.0 1 17
Psychiatry 310 1,858 12 438 2,798 335 1,838 18.0 98.9 3,712 21,070
Psychiatry-Family Medicine 7 12 0 12 63 2 12 16.7 100.0 13 161
Psychiatry-Neurology 3 2 0 0 13 0 2 0.0 100.0 0 23
Radiation Oncology 6 14 1 3 119 1 11 7.1 78.6 5 180
Radiology-Diagnostic 33 123 4 157 899 28 116 22.8 94.3 398 1,999
Surgery (Categorical) 328 1,536 4 340 2,713 202 1,531 13.2 99.7 2,678 21,980
Surgery-Preliminary (PGY-1 Only) 258 1,174 174 202 1,962 31 583 2.6 49.7 625 9,586
Thoracic Surgery 29 38 0 8 120 1 38 2.6 100.0 26 655
Transitional (PGY-1 Only) 176 1,436 44 753 3,801 260 1,230 18.1 85.7 5,942 28,629
Vascular Surgery 59 75 1 10 153 5 73 6.7 97.3 80 1,467
Total PGY-1 5048 34266 611 9984 60856 5968 32399 17.4 94.6 78922 459049
"""

match_summary = {
    "year": 2020,
    "MD_or_DO": "DO",
    "seniors": {}

}

lines = data.strip().split('\n')
for line in lines:
    fields = line.split()
    specialty = " ".join(fields[:-11])
    match_summary["seniors"][specialty] = {
        "No_of_Programs": int(fields[-11].replace(",", "")),  # Remove commas before converting to integer
        "Positions_Offered": int(fields[-10].replace(",", "")),
        "Unfilled_Programs": int(fields[-9].replace(",", "")),
        "No_of_Applicants": int(fields[-8].replace(",", "")),
        "Total_Applicants": int(fields[-7].replace(",", "")),
        "No_of_Matches": int(fields[-6].replace(",", "")),  # Convert to float instead of int
        "Total_Matches": int(fields[-5].replace(",", "")),  # Convert to float instead of int
        "Percentage_Filled": float(fields[-4].replace(",", "")),
        "Total_Percentage_Filled": float(fields[-3].replace(",", ""))
    }

json_data = json.dumps(match_summary, indent=2)

print(json_data)

with open('match_summary.json', 'w') as json_file:
    json_file.write(json_data)