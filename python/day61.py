import re

# Check if string is 8 digits or 11 or starting with +, plus 12 digits (+63)

text = "+639674693577"

digits_only = re.sub(r'\D', '', text)
is_valid = len(digits_only) in (8, 11, 12)
print(is_valid)