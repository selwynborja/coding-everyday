import re

# Check if string contains 1 digit, 1 symbol, 1 uppercase letter and 1 lowercase and is more than 10 characters long

pattern = r"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{11,}$"
is_valid = bool(re.match(pattern, "Somewhereib1@"))
print(is_valid)