import re

# Check if string has 8 digits, or 11 digits starting with zero, or string begins with +, and contains 12 digits; valid: 8812-5566; (0922)3334455; +63922-3334455

str = "+63922-3334455"

digits_only = re.sub(r'\D', '', str)
is_valid = len(digits_only) in (8, 11, 12)
print(is_valid)