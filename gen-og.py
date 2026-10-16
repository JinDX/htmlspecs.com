#!/usr/bin/env python3
"""Generate the 1200x630 social preview card for htmlspecs.com.

Reproducible from a fresh checkout:
    1. Install Pillow:  pip install Pillow
    2. Install fonts (Debian/Ubuntu package names):
         - fonts-montserrat  (or place Montserrat-*.ttf in ./fonts)
         - fonts-wqy-zenhei  (or place a CJK font in ./fonts)
    3. Run:  python3 gen-og.py
    4. Output: social-preview.png in the script's directory.

Font lookup order (first match wins):
    $HTMLSPECS_FONT_DIR  ->  ./fonts  ->  ~/.fonts  ->  system font dirs
No absolute machine-specific paths are used.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
GREEN = (60, 121, 10)      # #3c790a brand
DARK  = (18, 30, 12)       # deep green-black
LIGHT = (245, 250, 240)    # near-white
MUTED = (120, 140, 110)    # muted green-grey
ACCENT = (207, 213, 10)    # #cfd510 (CR badge yellow-green)

SCRIPT_DIR = Path(__file__).resolve().parent
OUT = Path(__file__).resolve().with_name("social-preview.png")

FONT_DIRS = [
    Path(__import__("os").environ.get("HTMLSPECS_FONT_DIR", "")),
    SCRIPT_DIR / "fonts",
    Path.home() / ".fonts",
    Path("/usr/share/fonts/truetype/montserrat"),
    Path("/usr/share/fonts/truetype/wqy"),
    Path("/usr/share/fonts/opentype/noto"),
]


def find_font(names, hint):
    """Return the first existing path for any of the given font file names."""
    for base in FONT_DIRS:
        if not base.is_dir():
            continue
        for name in names:
            p = base / name
            if p.is_file():
                return str(p)
    raise FileNotFoundError(
        f"{hint}: none of {names} found in {[str(d) for d in FONT_DIRS if d.is_dir()]}. "
        "Install the font or set HTMLSPECS_FONT_DIR."
    )


MONT_SB = find_font(["Montserrat-SemiBold.ttf", "Montserrat-SemiBold.otf"], "Montserrat SemiBold")
MONT_EB = find_font(["Montserrat-ExtraBold.ttf", "Montserrat-ExtraBold.otf"], "Montserrat ExtraBold")
MONT_R  = find_font(["Montserrat-Regular.ttf", "Montserrat-Regular.otf"], "Montserrat Regular")
# WenQuanYi Zen Hei covers the Chinese glyphs used on the card.
WQY     = find_font(["wqy-zenhei.ttc", "wqy-zenhei.ttf", "NotoSansCJK-Regular.ttc"], "CJK font (wqy-zenhei or Noto Sans CJK)")


def font(path, size):
    return ImageFont.truetype(path, size)


def draw_text_cjk(d, xy, english, cjk, en_font, cjk_font, fill):
    """Draw mixed English/Chinese text, using the CJK font only for CJK runs.

    An English-only font (Montserrat) renders CJK codepoints as empty boxes,
    so the runs are measured and drawn separately with the appropriate fonts.
    """
    x, y = xy
    d.text((x, y), english, font=en_font, fill=fill)
    x += d.textlength(english, font=en_font)
    d.text((x, y), cjk, font=cjk_font, fill=fill)


def main():
    img = Image.new("RGB", (W, H), DARK)
    d = ImageDraw.Draw(img)

    # Subtle diagonal brand-green band: a soft fade that uses per-row alpha.
    for i in range(0, 90):
        alpha = int(90 * (1 - i / 90))  # strong near the bottom edge, fading up
        rgba = (GREEN[0], GREEN[1], GREEN[2], alpha)
        band = Image.new("RGBA", (W, 1), rgba)
        img.paste(band, (0, H - 40 - i), band)

    d = ImageDraw.Draw(img)

    # top accent bar
    d.rectangle([0, 0, W, 10], fill=GREEN)

    # left vertical accent
    d.rectangle([0, 0, 14, H], fill=GREEN)

    # corner bracket motif (spec/document feel)
    d.line([(W-90, 40), (W-40, 40)], fill=ACCENT, width=6)
    d.line([(W-40, 40), (W-40, 90)], fill=ACCENT, width=6)
    d.line([(90, H-40), (40, H-40)], fill=ACCENT, width=6)
    d.line([(40, H-40), (40, H-90)], fill=ACCENT, width=6)

    # eyebrow — English in Montserrat, Chinese in WenQuanYi Zen Hei
    draw_text_cjk(d, (90, 70), "WEB STANDARDS · ", "中文镜像",
                  font(MONT_SB, 30), font(WQY, 30), ACCENT)

    # headline
    d.text((90, 130), "HTML Standard", font=font(MONT_EB, 96), fill=LIGHT)

    # subhead
    d.text((90, 250), "HTML 及相关 API · CSS · HTTP 标准系列", font=font(WQY, 44), fill=LIGHT)

    # description
    d.text((90, 330), "Living standards for the open web platform,", font=font(MONT_R, 34), fill=MUTED)
    d.text((90, 375), "mirrored in Chinese for developers worldwide.", font=font(MONT_R, 34), fill=MUTED)

    # pill
    d.rounded_rectangle([90, 450, 470, 520], radius=35, fill=GREEN)
    d.text((150, 470), "htmlspecs.com", font=font(MONT_SB, 40), fill=LIGHT)

    # footer
    d.text((90, 560), "WHATWG · W3C · TC39 · IETF", font=font(MONT_SB, 28), fill=MUTED)

    img.save(OUT, optimize=True)
    print("saved", OUT, img.size)


if __name__ == "__main__":
    main()
