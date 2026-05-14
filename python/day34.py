from datetime import date
import time

def currentTime():
  t = time.localtime()
  formatted_time = time.strftime("%H:%M:%S", t)
  return formatted_time

def currentDate():
  d = date.today()
  formatted_date = d.strftime("%d %B %Y")
  return formatted_date

print(f"Current date and time: {currentDate()} {currentTime()}")