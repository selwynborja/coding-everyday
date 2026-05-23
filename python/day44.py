import re

text = "What the fuck is this? Is he dead?"
# Replace words using the sub method with a lambda
clean_text = re.sub(r'\b(fuck|dead)\b', lambda m: '*' * len(m.group()), text, flags=re.IGNORECASE)
print(clean_text)