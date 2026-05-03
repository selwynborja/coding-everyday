# dictionary
translations = {
  "one" : "isa",
  "two" : "dalawa",
  "three" : "tatlo",
  "four" : "apat",
  "five" : "lima",
  "six" : "anim",
  "seven" : "pito",
  "eight" : "walo",
  "nine" : "siyam",
  "ten" : "sampu"
}

user_input = input("Enter a number in words (one to ten): ")
word = user_input.strip().lower()

if word in translations:
  print(f"The tagalog translation is: {translations[word]}")
else:
  print("Invalid input. Please enter a word from one to ten.")