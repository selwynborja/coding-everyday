import hashlib
import getpass

def get_stored_hash(filepath="password_hash.txt"):
    """Reads the stored SHA-1 hash from the text file."""
    try:
        with open(filepath, "r") as file:
            return file.read().strip()
    except FileNotFoundError:
        print(f"Error: The file {filepath} does not exist.")
        return None

def verify_password():
    # 1. Get stored hash
    stored_hash = get_stored_hash()
    if not stored_hash:
        return

    # 2. Ask for password securely (hides typing)
    entered_password = getpass.getpass("Enter your password: ")

    # 3. Hash the entered password with SHA-1
    # .encode('utf-8') converts the string to bytes required by hashlib
    # .hexdigest() returns the 40-character hex string
    entered_hash = hashlib.sha1(entered_password.encode('utf-8')).hexdigest()

    # 4. Validate against the stored hash
    if entered_hash == stored_hash:
        print("Access Granted: Password matches!")
    else:
        print("Access Denied: Incorrect password.")

if __name__ == "__main__":
    verify_password()
