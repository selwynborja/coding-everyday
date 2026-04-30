import sys
import tty
import termios

def getch():
  # reads a single character in the terminal withtout echo
  fd = sys.stdin.fileno()
  old_settings = termios.tcgetattr(fd)
  try:
    tty.setraw(sys.stdin.fileno())
    ch = sys.stdin.read(1)
  finally:
    termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
  return ch

a, b = 0, 1
print("Press any key for the next number (Ctrl+C to stop): ")
while True:
  char = getch()
    
  if char in ('\x03', '\x04'):
    print("\nExiting...")
    break

  print(f"\rFibonacci: {a}", end = " ", flush=True)
  a, b = b, a + b
