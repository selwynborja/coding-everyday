import random

def roll():
    # randint(1, 6) generates a random number between 1 and 6 inclusive
    return random.randint(1, 6), random.randint(1, 6)

print(roll())