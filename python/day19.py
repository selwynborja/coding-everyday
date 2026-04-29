import sys
import tty
import termios

def get_key():
    # Save current terminal settings
    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        # Set terminal to raw mode (capture single key)
        tty.setraw(sys.stdin.fileno())
        key = sys.stdin.read(1)
    finally:
        # Restore original settings
        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
    return key

count = 0
print("WSL Counter: Press any key to increment (Press 'q' to quit)")

while True:
    print(f"\rCurrent Number: {count}", end="", flush=True)
    char = get_key()
    
    if char.lower() == 'q':
        print("\nExiting...")
        break
        
    count += 1
