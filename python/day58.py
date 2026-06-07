import re

digit = "1234567890"
is_valid = bool(re.fullmatch(r'\d{8}|\d{10}', digit))
print(is_valid)