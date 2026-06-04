import re

regex = r"^\d{8}$"
digit = bool(re.match(regex, "12345678"))
print(digit)