import getpass
import bcrypt

HASH_FILE = "password_hash.txt"

def setup_password():
    """Prompts for a new password, hashes it, and saves it to a txt file."""
    print("--- Setup New Password ---")
    password = getpass.getpass("Create a password: ").encode('utf-8')
    
    # Hash the password (bcrypt automatically generates a secure salt)
    hashed = bcrypt.hashpw(password, bcrypt.gensalt())
    
    with open(HASH_FILE, "wb") as file:
        file.write(hashed)
    print("Password securely hashed and saved!")

def verify_password():
    """Asks for the password and verifies it against the stored hash."""
    try:
        with open(HASH_FILE, "rb") as file:
            stored_hash = file.read()
    except FileNotFoundError:
        print("No password file found. Please run setup first.")
        return

    print("\n--- Login ---")
    entered_password = getpass.getpass("Enter your password: ").encode('utf-8')

    # Validate the entered password against the stored hash
    if bcrypt.checkpw(entered_password, stored_hash):
        print("Access Granted: Passwords match!")
    else:
        print("Access Denied: Incorrect password.")

if __name__ == "__main__":
    # Run setup once to create the file, then comment it out or delete it
    setup_password()
    
    # Run verification
    verify_password()
