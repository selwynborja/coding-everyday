import re

text = "(09123456789)"

digits_only = re.sub(r'\D', '', text)
is_valid = len(digits_only) in (8, 11)
print(is_valid)