from datetime import datetime, timedelta

current_time = datetime.now();
new_time = current_time + timedelta(hours=1)

print("Current Time: ",current_time.strftime("%Y-%m-%d %H:%M:%S"))
print("Time After 1 Hour: ",new_time.strftime("%Y-%m-%d %H:%M:%S"))