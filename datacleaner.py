# Paste the text data here
text_data = """
Anesthesiology: 47 3.5 48 4.2 28 2.7 38 3.6 34 3.1
Dermatology: 0.1 2 0.1 1 0.0 0 0.0 0 0.0 0
Emergency Medicine: 133 9.9 120 10.6 117 11.4 87 8.3 100 9.1
Emergency Med/Family Med: 0.1 1 0.0 0 0.0 0 0.0 0 0.0 0
Family Medicine: 264 19.7 227 20.0 221 21.6 240 23.0 268 24.4
Internal Medicine (Categorical): 19.7 264 20.5 233 22.8 233 20.3 212 23.0 253
Medicine-Dermatology: 0 0.0 0 0.0 0 0.0 0 0.0 0 0.0
Medicine-Emerg Med: 0.4 5 0.2 2 0.2 2 0.3 3 0.2 2
Medicine-Family Medicine: 0 0.0 0 0.0 2 0.2 2 0.2 1 0.1
Medicine-Medical Genetics: 0.0 0 0.0 0 0.0 0 0.0 0 0.0 0
Medicine-Neurology: 1 0.1 0 0.0 0 0.0 0 0.0 0 0.0
Medicine-P M & R: 0.0 0 0.0 0 0.0 0 0.0 0 0.0 0
Medicine-Pediatrics: 24 1.8 24 2.1 21 2.1 20 1.9 13 1.2
Medicine-Preliminary (PGY-1 Only): 3.5 47 3.7 42 3.8 39 2.9 30 2.2 24
Medicine-Preventive Med: 1 0.1 1 0.1 0 0.0 0 0.0 0 0.0
Medicine-Primary: 0.8 11 1.9 22 1.3 13 1.4 15 1.5 17
Medicine-Psychiatry: 1 0.1 2 0.2 1 0.1 0 0.0 0 0.0
Medical Genetics: 0.0 0 0.0 0 0.0 0 0.0 0 0.0 0
Neurological Surgery: 0 0.0 1 0.1 0 0.0 0 0.0 0 0.0
Neurology: 0.8 11 0.8 9 0.1 1 0.3 3 0.0 0
Nuclear Medicine: 0 0.0 0 0.0 0 0.0 0 0.0 0 0.0
Obstetrics-Gynecology: 8.8 118 7.7 87 6.3 64 7.5 78 7.9 87
Ophthalmology: 0 0.0 0 0.0 0 0.0 0 0.0 0 0.0
Orthopaedic Surgery: 0.1 2 0.2 2 0.3 3 0.4 4 0.1 1
Otolaryngology: 1 0.1 0 0.0 0 0.0 0 0.0 0 0.0
Pathology: 1.8 24 2.6 29 2.5 26 2.0 21 2.3 25
Pediatrics (Categorical): 213 15.9 129 11.4 122 11.9 141 13.5 135 12.3
Pediatrics-Dermatology: 0.0 0 0.0 0 0.0 0 0.0 0 0.0 0
Pediatrics-Emerg Med: 1 0.1 0 0.0 0 0.0 1 0.1 0 0.0
Pediatrics-Medical Genetics: 0.0 0 0.0 0 0.0 0 0.0 0 0.0 0
Pediatrics-P M & R: 0 0.0 0 0.0 1 0.1 1 0.1 0 0.0
Pediatrics-Primary: 0.1 1 0.0 0 0.2 2 0.4 4 0.1 1
Peds/Psych/Child Psych: 1 0.1 2 0.2 1 0.1 1 0.1 0 0.0
Physical Medicine & Rehab: 1.0 14 0.8 9 1.2 12 1.5 16 0.8 9
Plastic Surgery: 0 0.0 0 0.0 0 0.0 0 0.0 0 0.0
Preventive Medicine: 0.0 0 0.0 0 0.0 0 0.0 0 0.0 0
Psychiatry (Categorical): 100 7.5 74 6.5 67 6.5 65 6.2 67 6.1
Psychiatry-Family Medicine: 0.0 0 0.1 1 0.0 0 0.0 0 0.2 2
Psychiatry-Neurology: 0 0.0 0 0.0 0 0.0 0 0.0 0 0.0
Radiation Oncology: 0.0 0 0.0 0 0.0 0 0.0 0 0.0 0
Radiology-Diagnostic: 6 0.4 6 0.5 4 0.4 6 0.6 2 0.2
Surgery (Categorical): 2.3 31 2.6 30 1.7 17 2.1 22 2.0 22
Surgery-Preliminary (PGY-1 Only): 8 0.6 20 1.8 9 0.9 15 1.4 13 1.2
Thoracic Surgery: 0.0 0 0.0 0 0.0 0 0.0 0 0.0 0
Transitional (PGY-1 Only): 7 0.5 15 1.3 18 1.8 20 1.9 22 2.0
Urology: 0.0 0 0.0 0 0.0 0 0.0 0 0.1 1
Vascular Surgery: 0 0.0 0 0.0 0 0.0 0 0.0 0 0.0
"""

# Split the text into lines
lines = text_data.strip().split('\n')

# Iterate through each line
for i, line in enumerate(lines):
    # Check if the line number is odd
    if i % 2 == 1:
        # Split the line into words
        words = line.strip().split()
        
        # Switch the first and second number
        words[-1], words[-2] = words[-2], words[-1]
        words[-3], words[-4] = words[-4], words[-3]
        words[-5], words[-6] = words[-6], words[-5]
        words[-7], words[-8] = words[-8], words[-7]
        words[-9], words[-10] = words[-10], words[-9]
        
        # Join the words back into a line
        new_line = ' '.join(words)
        
        # Replace the original line with the modified line
        lines[i] = new_line

# Print the modified text
modified_text = '\n'.join(lines)
print(modified_text)
