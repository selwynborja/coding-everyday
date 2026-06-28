import re 

password = input("Enter a passoword: ")

if len(password) < 8:
  print("Error: Password must be at least 8 characters long.")
  exit()

has_lower = bool(re.search(r"[a-z]", password))
has_upper = bool(re.search(r"[A-Z]", password))
has_digit = bool(re.search(r"\d", password))
has_symbol = bool(re.search(r"[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>/?]", password))

score = has_lower + has_upper + has_digit + has_symbol

if score < 3: 
  print("Error: Password must mee 3 of 4 criteria: lowercase, uppercase, digit, symbol")
else :
  print("Success: Password is valid!")
