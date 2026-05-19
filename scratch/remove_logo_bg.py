import os
import sys

def main():
    # Install Pillow if not present
    try:
        from PIL import Image
    except ImportError:
        print("Pillow not found, installing...")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
        from PIL import Image

    logo_path = os.path.abspath("../public/logo.png")
    if not os.path.exists(logo_path):
        # try relative to workspace root
        logo_path = os.path.abspath("public/logo.png")
    
    print(f"Loading logo from {logo_path}")
    img = Image.open(logo_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        r, g, b, a = item
        # If pixel is close to white (high red, green, blue values), keep it.
        # Otherwise, make it fully transparent.
        # Let's check if it's near-white (threshold say 210 for R, G, B)
        # We can also keep some anti-aliasing by blending alpha.
        brightness = (r + g + b) / 3
        if r > 180 and g > 195 and b > 210:  # White or very light gray/blue near edges
            # Keep it
            new_data.append(item)
        else:
            # Make it fully transparent
            new_data.append((0, 0, 0, 0))

    img.putdata(new_data)
    
    # Save a backup of the original just in case
    backup_path = logo_path + ".backup"
    if not os.path.exists(backup_path):
        os.rename(logo_path, backup_path)
        print(f"Saved backup to {backup_path}")
    else:
        # If backup already exists, just overwrite the current logo
        pass

    img.save(logo_path, "PNG")
    print("Successfully removed background and saved logo.png!")

if __name__ == "__main__":
    main()
