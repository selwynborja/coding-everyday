user_input = input("Enter a Number: ")

if user_input.isdigit():
  print(f"Success! You entered a number: {user_input}")
else:
  print("Error: That is not a number.")