try:
  # Ask for input and convert it to a number
  num = float(input("Enter a number between 0 and 100: "))

  # Check the range
  if num < 0 or num > 100:
    raise ValueError(f"Input {num} is out of range! Must be between 0 and 100.")
    print(f"Success! You entered: {num}")

except ValueError as e:
  # This catches both non-numeric inputs and our custom range error
  print(f"Error: {e}")
