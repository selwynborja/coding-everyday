import getpass
import re

# Ask for passsword input and require all (digit, symbol, uppercase, lowercase)

def validate_password(password):
    # Requires: 1 digit, 1 symbol, 1 uppercase, 1 lowercase, min 8 characters
    pattern = r"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$"
    
    # Return True if it matches, False otherwise
    return bool(re.match(pattern, password))

def main():
    print("--- Password Setup ---")
    
    # getpass securely hides the user's typing in the terminal
    password = getpass.getpass("Enter your new password: ")
    
    if validate_password(password):
        print("Success: Your password meets all security requirements!")
    else:
        print("Error: Password fails requirements.")
        print("Must contain at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 symbol.")

if __name__ == "__main__":
    main()
