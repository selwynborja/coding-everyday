import sys

def get_masked_input(prompt="Enter password: "):
    print(prompt, end="", flush=True)
    password = ""
    
    # Windows Implementation
    if sys.platform == "win32":
        import msvcrt
        while True:
            ch = msvcrt.getch()
            # Handle Enter key
            if ch in (b'\r', b'\n'):
                print()
                break
            # Handle Backspace
            elif ch in (b'\x08', b'\x7f'):
                if len(password) > 0:
                    password = password[:-1]
                    # Move back, overwrite with space, move back again
                    sys.stdout.write('\b \b')
                    sys.stdout.flush()
            # Handle standard characters
            elif ord(ch) >= 32:
                password += ch.decode('utf-8')
                sys.stdout.write('*')
                sys.stdout.flush()
            
    return password

# Execute the function
secret = get_masked_input()
print(f"Captured value: {secret}")
