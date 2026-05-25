import re

text = "tangina mo"
clean_text = re.sub(r'\b(tangina)\b', lambda m: '*' * len(m.group()), text, flags=re.IGNORECASE)
print(clean_text)