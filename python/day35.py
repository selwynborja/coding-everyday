from datetime import datetime

now = datetime.now();

# Calculate seconds passed since midnight
seconds_passed = (now.hour * 3600) + (now.minute * 60) + now.second

# Total seconds in a day (24 * 60 * 60)
total_seconds_day = 86400

remaining_seconds = total_seconds_day - seconds_passed
print(f"Remaining Seconds: {remaining_seconds}")