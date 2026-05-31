import re

text = "mplseas@#$$"
contains_symbol = bool(re.search(r'[^\w\s]', text))
print(contains_symbol)