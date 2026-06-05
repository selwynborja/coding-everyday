import re

test_string = "123-456-78"
digits_only = re.sub(r'\D', '', test_string)
has_8_digits = len(digits_only) == 8

print(has_8_digits)