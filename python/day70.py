import hashlib
import getpass

def save_password_hash():
    # 1. Ask for password without echoing it to the terminal screen
    password = getpass.getpass("Enter your password: ")
    
    # 2. Encode string to bytes and generate SHA-256 hash
    hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()
    
    # 3. Save the hexadecimal string digest to a text file
    with open("password_hash.txt", "w", encoding="utf-8") as file:
        file.write(hashed_password)
        
    print("Password hash successfully saved to password_hash.txt!")

if __name__ == "__main__":
    save_password_hash()
