import getpass

# 1. Prompt the user for input securely (hides typing)
password = getpass.getpass("Please enter your password: ")

# 2. Check for a lowercase letter using any() and .islower()
has_lowercase = any(char.islower() for char in password)

# 3. Output the result
if has_lowercase:
    print("Valid: Password contains at least one lowercase letter.")
else:
    print("Invalid: Password must contain at least one lowercase letter.")
