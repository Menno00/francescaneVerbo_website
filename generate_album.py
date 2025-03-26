import os
import json

def generate_album_json(album_dir):
    result = {}
    for folder in os.listdir(album_dir):
        folder_path = os.path.join(album_dir, folder)
        if os.path.isdir(folder_path):
            images = [file for file in os.listdir(folder_path) if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif'))]
            result[folder] = images
    return result

# Correct the path to the album directory
album_dir = os.path.join(os.path.dirname(__file__), 'src', 'assets', 'images', 'album')
album_json = generate_album_json(album_dir)

with open(os.path.join(os.path.dirname(__file__), 'album.json'), 'w') as json_file:
    json.dump(album_json, json_file, indent=2)

print('album.json has been generated')