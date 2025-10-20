# scripts/update_date.py
import datetime
import re
import sys
from datetime import datetime
from zoneinfo import ZoneInfo

berlin_tz = ZoneInfo("Europe/Berlin")
now = datetime.now(berlin_tz).strftime("%Y-%m-%dT%H:%M:%S%z")

# Insert colon in timezone to match Hugo style: +02:00
now = now[:-2] + ":" + now[-2:]

# Read changed files from file list passed as argument
if len(sys.argv) < 2:
    print("Usage: python update_date.py <changed.txt>")
    sys.exit(1)

changed_file_list = sys.argv[1]

with open(changed_file_list, "r") as f:
    files = [line.strip() for line in f.readlines() if line.strip()]

for path in files:
    try:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()

        # Replace existing date line or insert after first ---
        if re.search(r"^date:\s*.*$", content, re.MULTILINE):
            new_content = re.sub(
                r"^date:\s*.*$", f"date: {now}", content, flags=re.MULTILINE
            )
        else:
            new_content = re.sub(r"^---", f"---\ndate: {now}", content, count=1)

        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)

        print(f"Updated date in {path}")
    except FileNotFoundError:
        print(f"Warning: {path} not found, skipping.")