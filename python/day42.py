from datetime import datetime, timedelta

yesterday = datetime.now() - timedelta(days=1)
print(yesterday.strftime('%Y-%m-%d'))