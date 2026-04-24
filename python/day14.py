# split name string into array
name = "nhoj"
char_arr = list(name)

# capitalized the first index of the array
char_arr[0] = char_arr[0].upper()

# reconstruct to a string
capitalized_name = "".join(char_arr)
print(capitalized_name)