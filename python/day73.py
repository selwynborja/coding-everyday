import hashlib
import os
import getpass

# Check if password hash file exists, ask for a new password if not, if it exists, ask for the password, then validate using the stored hash txt file

HASH_FILE = "stored_hash.txt"

def hash_password(password: str) -> str:
    """Hashes a password using PBKDF2 with a randomly generated salt."""
    # Generate a cryptographically secure 16-byte salt
    salt = os.urandom(16)
    # Derive the key using SHA-256 and 100,000 iterations
    derived_key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)
    # Store both salt and derived key in hex format, separated by a colon
    return f"{salt.hex()}:{derived_key.hex()}"

def verify_password(stored_hash_string: str, provided_password: str) -> bool:
    """Verifies a provided password against the stored salt and hash string."""
    try:
        salt_hex, stored_key_hex = stored_hash_string.split(":")
        salt = bytes.fromhex(salt_hex)
        stored_key = bytes.fromhex(stored_key_hex)
        
        # Hash the provided password using the exact same salt and parameters
        new_key = hashlib.pbkdf2_hmac('sha256', provided_password.encode('utf-8'), salt, 100000)
        
        # Use constant-time comparison to prevent timing attacks
        return hashlib.hmac.compare_digest(stored_key, new_key)
    except (ValueError, TypeError):
        return False

def main():
    # 1. Check if the password hash file exists
    if not os.path.exists(HASH_FILE):
        print("--- No stored password found. Initializing Setup ---")
        # Use getpass to hide keyboard input during password entry
        new_password = getpass.getpass("Create a new password: ")
        confirm_password = getpass.getpass("Confirm your new password: ")
        
        if new_password != confirm_password:
            print("❌ Passwords do not match. Setup aborted.")
            return
            
        # Store securely hashed password
        hashed_string = hash_password(new_password)
        with open(HASH_FILE, "w") as f:
            f.write(hashed_string)
        print("✅ Password successfully configured and saved.")
        
    else:
        print("--- Security Verification Required ---")
        input_password = getpass.getpass("Enter your password: ")
        
        # Read the stored salt:hash string
        with open(HASH_FILE, "r") as f:
            stored_hash_string = f.read().strip()
            
        # Validate entry
        if verify_password(stored_hash_string, input_password):
            print("✅ Access Granted: Password verified successfully.")
        else:
            print("❌ Access Denied: Incorrect password.")

if __name__ == "__main__":
    main()