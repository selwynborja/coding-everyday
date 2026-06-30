import re

def validate_card_pattern(card_number: str) -> bool:
    """
    Cleans the input string and validates it against major card network rules.
    """
    # 1. Remove all spaces and hyphens
    sanitized = re.sub(r'[\s-]', '', card_number)

    # 2. Master Regex for major card networks:
    # Visa: Starts with 4, length 13 or 16 digits
    # MasterCard: Starts with 51-55, length 16 digits
    # Amex: Starts with 34 or 37, length 15 digits
    # Discover: Starts with 6011 or 65, length 16 digits
    card_regex = r"^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$"

    # 3. Match against the string
    return bool(re.match(card_regex, sanitized))

# Prompt the user for input in the terminal
user_input = input("Please enter your Credit or Debit Card number: ")

if validate_card_pattern(user_input):
    # Print in green text if terminal supports it
    print("\033[92m Success: The card number format is valid.\033[0m")
else:
    # Print in red text if terminal supports it
    print("\033[91m Error: Invalid card number format.\033[0m")
