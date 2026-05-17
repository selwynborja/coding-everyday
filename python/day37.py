from datetime import datetime, time

now = datetime.now();

# Define the end of the day (23:59:59.999999)
end_of_day = datetime.combine(now.date(), time.max)

# Calculate the time remaining
remaining = end_of_day - now

# Convert total remaining time to microseconds
remaining_micros = int(remaining.total_seconds() * 1_000_000)

print(f"Remaining Microseconds Today: {remaining_micros}")