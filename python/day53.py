import re

pattern = r"^(?=.*[a-z])"
is_valid = bool(re.match(pattern, "UPPERcASE"))
print(is_valid)