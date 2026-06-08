import re

# Check if string contains 8 or 10 digits (even if there's dash, space or + parenthesis) (02) 8-555-6677

text = "(02) 8-555-6677"

digits_only = re.sub(r'\D', '', text)
is_valid = len(digits_only) in (8, 10)
print(is_valid)