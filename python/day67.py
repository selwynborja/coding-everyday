import msvcrt
import sys

def get_windows_password(prompt="Enter password: "):
    """Captures a password on Windows with backspace support and masks it with '*'."""
    password = []
    print(prompt, end="", flush=True)
    
    while True:
        # Read a single keypress without displaying it
        char = msvcrt.getch()
        
        # Enter key pressed
        if char in (b'\r', b'\n'):
            print() # Move cursor to a new line
            break
            
        # Backspace key pressed
        elif char == b'\b':
            if password:
                password.pop()
                # Move cursor back, overwrite with space, move cursor back again
                print('\b \b', end="", flush=True)
                
        # Handle regular character inputs
        else:
            try:
                char_str = char.decode('utf-8')
                password.append(char_str)
                print('*', end="", flush=True)
            except UnicodeDecodeError:
                pass # Ignore special non-utf8 key codes
                
    return "".join(password)

# Run the input mask
pwd = get_windows_password()

# Save output safely using context management
if pwd:
    with open("saved_password.txt", "w", encoding="utf-8") as file:
        file.write(pwd)
    print("Password securely written to 'saved_password.txt'.")
else:
    print("Input empty. File was not generated.")
