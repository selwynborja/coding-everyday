user_input = input("Enter a string: ")
unique_list = []

for char in user_input:
  if char not in unique_list:
    unique_list.append(char)

print("Unique characters:", "".join(unique_list))