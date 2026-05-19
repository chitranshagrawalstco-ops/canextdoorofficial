import os
from PIL import Image

def remove_background_perfect():
    logo_path = os.path.abspath("public/logo.png")
    if not os.path.exists(logo_path):
        logo_path = os.path.abspath("../public/logo.png")
        
    print(f"Loading logo from {logo_path}")
    img = Image.open(logo_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    
    # We want to keep pure white and near-white pixels.
    # We'll calculate the Euclidean distance to pure white (255, 255, 255)
    # White symbol pixels will have very small distance.
    # Blue background pixels will have very large distance.
    # We'll smoothly transition the alpha to keep the anti-aliasing clean.
    
    # Let's set soft thresholds:
    # Any pixel with distance <= threshold_min is kept 100% opaque.
    # Any pixel with distance >= threshold_max is made 100% transparent.
    # In between, we interpolate.
    
    threshold_min = 70   # Very close to white
    threshold_max = 140  # Start keying out blue/gray
    
    for item in datas:
        r, g, b, a = item
        
        # Distance to white
        dist = ((255 - r)**2 + (255 - g)**2 + (255 - b)**2)**0.5
        
        if dist <= threshold_min:
            # Keep original
            new_data.append((r, g, b, a))
        elif dist >= threshold_max:
            # Fully transparent
            new_data.append((0, 0, 0, 0))
        else:
            # Linear interpolation of alpha
            factor = (threshold_max - dist) / (threshold_max - threshold_min)
            new_alpha = int(a * factor)
            # Make the color pure white to avoid blue halos on transparent edges
            new_data.append((255, 255, 255, new_alpha))

    img.putdata(new_data)
    
    # Backup logo if not already backed up
    backup_path = logo_path + ".backup"
    if not os.path.exists(backup_path):
        os.rename(logo_path, backup_path)
        print(f"Backed up original to {backup_path}")
        
    img.save(logo_path, "PNG")
    print("Successfully processed logo.png with anti-aliasing!")

if __name__ == "__main__":
    remove_background_perfect()
