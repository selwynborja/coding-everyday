import hashlib
import os
import re

# Ask for a password input, if new, require strong password and register, if password exists(hashed password txt file), require existing password

FILE_PATH = "pass.txt"

def simple_hash(password):
    """Turns a password string into a secure SHA-256 hex string."""
    return hashlib.sha256(password.encode()).hexdigest()

def main():
    print("=== Terminal Authentication System ===")
    username = input("Enter Username: ").strip()
    
    if not username:
        print("Username cannot be empty.")
        return

    # 1. Read existing users from the file
    users = {}
    if os.path.exists(FILE_PATH):
        with open(FILE_PATH, "r", encoding="utf-8") as file:
            for line in file:
                line = line.strip()
                if ":" in line:
                    parts = line.split(":")
                    users[parts[0]] = parts[1] # format -> username: hashed_password

    # 2. Routing based on whether the user exists
    if username in users:
        # --- LOGIN FLOW ---
        print("User found! Please login.")
        password = input("Enter Password: ")
        
        if simple_hash(password) == users[username]:
            print("\033[92mSuccess: Logged in successfully!\033[0m")
        else:
            print("\033[91mError: Incorrect password.\033[0m")
            
    else:
        # --- REGISTRATION FLOW ---
        print("New user detected! Please register.")
        print("Rule: Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 symbol.")
        
        password = input("Create Strong Password: ")
        
        # Strict validation check
        has_upper = any(c.isupper() for c in password)
        has_lower = any(c.islower() for c in password)
        has_digit = any(c.isdigit() for c in password)
        has_symbol = bool(re.search(r"[^A-Za-z0-9]", password))
        
        if len(password) >= 8 and has_upper and has_lower and has_digit and has_symbol:
            new_hash = simple_hash(password)
            
            # Append user to file securely
            with open(FILE_PATH, "a", encoding="utf-8") as file:
                file.write(f"{username}:{new_hash}\n")
                
            print("\033[92mSuccess: Account created and saved to pass.txt!\033[0m")
        else:
            print("\033[91mError: Password does not meet requirements. Registration cancelled.\033[0m")

if __name__ == "__main__":
    main()
