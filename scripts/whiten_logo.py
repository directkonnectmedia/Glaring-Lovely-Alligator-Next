"""
Re-process logo for dark backgrounds:
- Start from the ORIGINAL full-res logo (`curbing logo.png`)
- Remove near-white background (alpha = 0 where all RGB >= 235)
- Convert the dark text + dark parts of the C monogram to WHITE
- Brighten the mid-gray portions of the mark
- Trim transparent margins
- Save to public/logo.png
"""
from PIL import Image

SRC = "../curbing logo.png"   # original delivered logo sits one level up
DST = "public/logo.png"

WHITE_BG_THRESHOLD = 235   # pixels with R,G,B all >= this become fully transparent
DARK_THRESHOLD = 90        # pixels with R,G,B avg <= this become pure white
BRIGHTEN_AMOUNT = 80       # amount to lift remaining mid-tone grays (0-255)


def clamp(v):
    return max(0, min(255, v))


def process():
    img = Image.open(SRC).convert("RGBA")
    w, h = img.size
    pixels = img.load()

    bg_cleared = 0
    whitened = 0
    brightened = 0

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]

            # 1. Near-white background -> transparent
            if r >= WHITE_BG_THRESHOLD and g >= WHITE_BG_THRESHOLD and b >= WHITE_BG_THRESHOLD:
                pixels[x, y] = (r, g, b, 0)
                bg_cleared += 1
                continue

            avg = (r + g + b) // 3

            # 2. Dark pixels (text glyphs, black parts of mark) -> pure white
            if avg <= DARK_THRESHOLD:
                pixels[x, y] = (255, 255, 255, a)
                whitened += 1
                continue

            # 3. Mid-tone grays -> brighten toward white
            pixels[x, y] = (
                clamp(r + BRIGHTEN_AMOUNT),
                clamp(g + BRIGHTEN_AMOUNT),
                clamp(b + BRIGHTEN_AMOUNT),
                a,
            )
            brightened += 1

    # Trim transparent margins
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    img.save(DST, "PNG", optimize=True)

    total = w * h
    print(f"Input:   {w}x{h}  ({SRC})")
    print(f"Output:  {img.size}  ({DST})")
    print(f"  background cleared: {bg_cleared}  ({bg_cleared/total*100:.1f}%)")
    print(f"  whitened (dark):    {whitened}  ({whitened/total*100:.1f}%)")
    print(f"  brightened (mid):   {brightened}  ({brightened/total*100:.1f}%)")


if __name__ == "__main__":
    process()
