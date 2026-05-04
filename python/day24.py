text = input("Enter something: ")
unique_chars = set(text)

print(f"Unique characters: {', '.join(sorted(unique_chars))}")
print(f"Total character count: {len(text)}")
