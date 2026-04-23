"""Download gallery images from Facebook CDN URLs into public/images/."""
import os
import urllib.request

URLS = [
    "https://scontent-phx1-1.xx.fbcdn.net/v/t39.84726-6/642885820_2171867176949850_4100972045694118070_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=92e707&_nc_ohc=fhMMELB6pzIQ7kNvwEycOBZ&_nc_oc=AdpjG4B8yfT_hXTxkP2SdTwI_TutB7LNodAr-Hs-oQq005gPNpS5-SPqJAv7XAGLMI0&_nc_zt=14&_nc_ht=scontent-phx1-1.xx&_nc_gid=oT7QPT8m7kPI-8XA8lrfJA&oh=00_Af225_0D-Ih0b5mbgq5OpmSXAGBJnkBaHdjoUi_M8bHnmg&oe=69F0286A",
    "https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/641640656_2002127343982059_4746532709124757410_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=IOqFdX7MV5gQ7kNvwG_se5w&_nc_oc=AdqKYyErBUwS_dthhK7J8u3fefOiYVhjff90adwA3ATrxYVBaNMJxEuD-Drrh4WotTU&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=oT7QPT8m7kPI-8XA8lrfJA&oh=00_Af2UHYrQNicy9G87HgHphgtJwnRm2q8IuSMZ0WM5wPyiAg&oe=69F01BCC",
    "https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/642258696_2427747631005011_4818850028681767705_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=tBvkBUOicQUQ7kNvwHPgfHr&_nc_oc=AdrV9IbD_-rkT-M1FIpRPzYjOdFaqcDMAb_qaz6ocY57KrrHIKi2OoG2bqWVBodXiIE&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=oT7QPT8m7kPI-8XA8lrfJA&oh=00_Af0B3_vv0sGqP4S3Ka8l21yzyuzG6SPnSvvk-DtB8qJZrA&oe=69F03DA6",
    "https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/642171244_1678789856610574_5893593167785776057_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=Wm8gXLa-Z1UQ7kNvwE_xY_x&_nc_oc=AdqLgAmouh2uhfzZP_bsDxeeukyQxJk-AcFcKyk2KuT6rVSK-1xWAzUTWOeC5Q5KwGs&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=oT7QPT8m7kPI-8XA8lrfJA&oh=00_Af3_B7XPL1uwOoptVCFTHhsFlzdbS9IPwpXYl8lY41iIQA&oe=69F04253",
    "https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/644609647_1676870510183050_2816062338391558343_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=G-u8aenIaRUQ7kNvwFNDiAu&_nc_oc=AdrpXXv2dd85itpfcFZOp_69ceom8WoGTrRqXHpuHatKkFL6iOZ_iaD1y1gdtB1vgRc&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=oT7QPT8m7kPI-8XA8lrfJA&oh=00_Af1XET6TKAVWvrG5An-4yubaI08TqM9tpeUMddflcA6p1g&oe=69F02D87",
]

OUT_DIR = "public/images/gallery"
os.makedirs(OUT_DIR, exist_ok=True)

req_headers = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
    )
}

for i, url in enumerate(URLS, start=1):
    out_path = os.path.join(OUT_DIR, f"gallery-{i}.jpg")
    req = urllib.request.Request(url, headers=req_headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp, open(out_path, "wb") as f:
            data = resp.read()
            f.write(data)
        print(f"[{i}] saved {out_path}  ({len(data):,} bytes)")
    except Exception as e:
        print(f"[{i}] FAILED {url[:80]}...  -> {e}")
