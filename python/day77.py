import getpass
import string

# 1. Securely ask for password input (hides character typing)
password = getpass.getpass("Enter your password: ")

# 2. Define your symbols (string.punctuation includes !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)
symbols = set(string.punctuation)

# 3. Check if at least one character is a symbol
has_symbol = any(char in symbols for char in password)

if has_symbol:
    print("Success: Password contains a symbol.")
else:
    print("Error: Password must contain at least one symbol.")
