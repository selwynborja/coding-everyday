import hashlib
import getpass

# 1. Get hidden password input from the user
password = getpass.getpass("Enter your password: ")

# 2. Convert the password string to bytes and generate the MD5 hash
md5_hash = hashlib.md5(password.encode('utf-8')).hexdigest()

# 3. Save the hash to a text file
filename = "password_hash.txt"
with open(filename, "w") as file:
    file.write(md5_hash)

print(f"Success! The MD5 hash has been saved to '{filename}'.")
print(f"Hash: {md5_hash}")