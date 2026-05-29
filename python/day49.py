import re

email = "example@gmai.com"
pattern = r'.+\@.+\..+'

if re.match (pattern, email):
  print("Matches pattern")
else:
  print("Does not match pattern")