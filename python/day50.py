import re

text = "hello123"
contains_digit = bool(re.search(r'\d', text))
print(contains_digit)