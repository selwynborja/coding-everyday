import hashlib
import getpass

password = getpass.getpass("Enter a password: ")

# Convert string to bytes and generate the SHA-1 hexadecimal hash
sha1_hash = hashlib.sha1(password.encode('utf-8')).hexdigest()

# Save the resulting has into a txt file
output_file = "password_hash.txt"
with open(output_file, "w", encoding="utf-8") as file:
  file.write(sha1_hash)

print(f"Success! The SHA-1 hash has been written to {output_file}")