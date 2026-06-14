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
          # Handle standard characters
          elif ord(ch) >= 32:
              password += ch.decode('utf-8')
              sys.stdout.write('*')
              sys.stdout.flush()
          
    return password

# Execute the function
secret = get_masked_input()
print(f"Captured value: {secret}")
