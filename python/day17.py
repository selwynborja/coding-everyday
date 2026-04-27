# unordered
string = "doghat"
unique = "".join(set(string))
print(unique)

# order-preserved (python 3.7+)
str = "banana"
unique_str = "".join(dict.fromkeys(str))
print(unique_str)