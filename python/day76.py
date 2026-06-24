import getpass

# 1. Securely prompt for password (hides text while typing)
password = getpass.getpass("Enter your password: ")

# 2. Check for an uppercase letter without Regex
has_uppercase = False

for char in password:
    # .isupper() returns True only if the character is a letter and uppercase
    if char.isupper():
        has_uppercase = True
        break  # Exit loop early once found

# 3. Output the result
if has_uppercase:
    print("Password valid: Contains an uppercase letter.")
else:
    print("Password invalid: Must contain at least one uppercase letter.")
