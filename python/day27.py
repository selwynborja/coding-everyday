def subtract_to_zero(y, x):
  result = y - x
  if result < 0:
    return 0
  else:
    return result
  
print(subtract_to_zero(150, 7)) 