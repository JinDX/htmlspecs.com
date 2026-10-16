#!/usr/bin/env python3
"""Generate 1200x630 social preview card for htmlspecs.com."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
GREEN = (60, 121, 10)      # #3c790a brand
DARK  = (18, 30, 12)       # deep green-black
LIGHT = (245, 250, 240)    # near-white
MUTED = (120, 140, 110)    # muted green-grey
ACCENT = (207, 213, 10)    # #cfd510 (CR badge yellow-green)

img = Image.new("RGB", (W, H), DARK)
d = ImageDraw.Draw(img)

# subtle diagonal brand-green band
for i in range(0, 90):
    alpha = int(255 * (1 - i / 90))
    band = (GREEN[0], GREEN[1], GREEN[2], alpha)
    d.line([(0, H - 40 - i), (W, H - 40 - i)], fill=GREEN, width=1)

# top accent bar
d.rectangle([0, 0, W, 10], fill=GREEN)

# left vertical accent
d.rectangle([0, 0, 14, H], fill=GREEN)

# corner bracket motif (spec/document feel)
bracket = 70
d.line([(W-90, 40), (W-40, 40)], fill=ACCENT, width=6)
d.line([(W-40, 40), (W-40, 90)], fill=ACCENT, width=6)
d.line([(90, H-40), (40, H-40)], fill=ACCENT, width=6)
d.line([(40, H-40), (40, H-90)], fill=ACCENT, width=6)

def font(path, size):
    return ImageFont.truetype(path, size)

mont_eb = "/home/paperclip/.fonts/Montserrat-ExtraBold.ttf"
mont_sb = "/home/paperclip/.fonts/Montserrat-SemiBold.ttf"
mont_r  = "/home/paperclip/.fonts/Montserrat-Regular.ttf"
wqy     = "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc"

# eyebrow
d.text((90, 70), "WEB STANDARDS · 中文镜像", font=font(mont_sb, 30), fill=ACCENT)

# headline
d.text((90, 130), "HTML Standard", font=font(mont_eb, 96), fill=LIGHT)

# subhead
d.text((90, 250), "HTML 及相关 API · CSS · HTTP 标准系列", font=font(wqy, 44), fill=LIGHT)

# description
d.text((90, 330), "Living standards for the open web platform,", font=font(mont_r, 34), fill=MUTED)
d.text((90, 375), "mirrored in Chinese for developers worldwide.", font=font(mont_r, 34), fill=MUTED)

# pill
d.rounded_rectangle([90, 450, 470, 520], radius=35, fill=GREEN)
d.text((150, 470), "htmlspecs.com", font=font(mont_sb, 40), fill=LIGHT)

# footer
d.text((90, 560), "WHATWG · W3C · TC39 · IETF", font=font(mont_sb, 28), fill=MUTED)

img.save("/home/paperclip/htmlspecs.com/social-preview.png", optimize=True)
print("saved social-preview.png", img.size)
