"""Remove near-white background from logo and save as transparent PNG."""
from PIL import Image
import sys

SRC = "public/logo.png"
DST = "public/logo.png"
# Tolerance: any pixel with all RGB channels >= THRESHOLD becomes transparent
THRESHOLD = 235

img = Image.open(SRC).convert("RGBA")
pixels = img.load()
w, h = img.size

removed = 0
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if r >= THRESHOLD and g >= THRESHOLD and b >= THRESHOLD:
            pixels[x, y] = (r, g, b, 0)
            removed += 1

img.save(DST, "PNG", optimize=True)
print(f"Transparent pixels written: {removed} / {w*h} ({removed/(w*h)*100:.1f}%)")
print(f"Saved to {DST} — size {w}x{h}")
