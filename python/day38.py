import calendar

year_input = input("Enter a year: ")

try:
  year = int(year_input)


  if calendar.isleap(year):
    print(f"{year} is a leap year.")
  else: 
    print(f"{year} is not a leap year.")

except ValueError:
  print("Error: Please enter a valid number for the year")