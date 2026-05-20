from datetime import datetime
from zoneinfo import ZoneInfo

ny_time = datetime.now(ZoneInfo("America/New_York"))
print("New York Date and Time: ", ny_time.strftime("%Y-%m-%d %H:%M:%S %Z"))

print("nako po github")