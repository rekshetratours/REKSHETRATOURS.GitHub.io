#!/usr/bin/env python3
"""
Adds the Instagram link next to the YouTube link in the footer of every .html file.

Usage (run inside your website folder):
    python3 add_instagram.py            # current folder
    python3 add_instagram.py path/to/site

Backups are saved as <file>.bak before any change.
"""
import re
import shutil
import sys
from pathlib import Path

INSTAGRAM_URL = "https://www.instagram.com/rekshetratours/"
INSTAGRAM_TAG = (
    f'<a href="{INSTAGRAM_URL}" target="_blank" rel="noopener" '
    f'aria-label="Instagram">📸</a>'
)

# Matches the YouTube anchor in the footer: <a ... youtube.com/@REKSHETRATOURSKALESWARAM ...>...</a>
YOUTUBE_RE = re.compile(
    r'(<a\b[^>]*youtube\.com/@REKSHETRATOURSKALESWARAM[^>]*>.*?</a>)',
    re.IGNORECASE | re.DOTALL,
)


def process(path: Path) -> str:
    text = path.read_text(encoding="utf-8")
    if "instagram.com/rekshetratours" in text:
        return "skipped (already has Instagram)"
    new_text, count = YOUTUBE_RE.subn(lambda m: m.group(1) + " " + INSTAGRAM_TAG, text, count=1)
    if count == 0:
        return "NOT CHANGED (YouTube link not found - add manually)"
    shutil.copy2(path, path.with_suffix(path.suffix + ".bak"))
    path.write_text(new_text, encoding="utf-8")
    return "updated"


def main():
    root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(".")
    files = sorted(root.rglob("*.html"))
    if not files:
        print("No .html files found in", root.resolve())
        return
    for f in files:
        print(f"{f}: {process(f)}")


if __name__ == "__main__":
    main()
