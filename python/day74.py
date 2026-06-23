import getpass

# 1. Prompt for password securely (hides typing in terminal)
password = getpass.getpass("Enter your password: ")

# 2. Check if at least one character is a digit
has_digit = any(char.isdigit() for char in password)

# 3. Output the result
if has_digit:
    print("✅ Password accepted! It contains a digit.")
else:
    print("❌ Password rejected. It must contain at least one digit.")
