import re

digit = "+12345 6-7 8"
is_valid = len(re.sub(r"\D", "", digit)) == 8
print(is_valid)