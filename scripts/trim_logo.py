"""Trim transparent padding around the logo."""
from PIL import Image

SRC = "public/logo.png"
DST = "public/logo.png"

img = Image.open(SRC).convert("RGBA")
bbox = img.getbbox()  # bounding box of non-transparent pixels
if bbox:
    cropped = img.crop(bbox)
    cropped.save(DST, "PNG", optimize=True)
    print(f"Cropped from {img.size} to {cropped.size}")
else:
    print("Image is fully transparent — nothing to trim")
