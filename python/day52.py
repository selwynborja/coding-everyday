import re

pattern = r"^(?=.*[A-Z])"
is_valid = bool(re.match(pattern, "upperCase"))
print(is_valid)