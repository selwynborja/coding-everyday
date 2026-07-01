import re

user_input = input("Pleae enter your credit/debit card number: ")

clean_number = re.sub(r'/D', '', user_input)

if 13 <= len(clean_number) < 19:
  formatted_number = " ".join(clean_number[i:i+4] for i in range(0, len(clean_number), 4)) 
  print(f"Thank you! Saverd as: {clean_number}")
  print(f"Formatted View: {formatted_number}")
else:
  print("\nError: Invalid card length. Please enter a valid number.")