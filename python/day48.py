import re

str1 = "usernhoj@gmail.com"
str2 = "usernhojgmailcom"

regex1 = bool(re.search(r'^(?=.*@)(?=.*\.)', str1))
regex2 = bool(re.search(r'^(?=.*@)(?=.*\.)', str2))

print(regex1)
print(regex2)