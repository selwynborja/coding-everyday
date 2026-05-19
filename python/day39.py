import time 

date_str = input("Enter date (YYYY-MM-DD): ")
time_stamp = time.mktime(time.strptime(date_str, "%Y-%m-%d"))
print(int(time_stamp))
