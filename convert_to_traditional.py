import os
from opencc import OpenCC

# Initialize OpenCC for Simplified to Traditional conversion
converter = OpenCC('s2t')

def convert_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Convert content
    converted_content = converter.convert(content)

    # Write back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(converted_content)
    print(f"Converted: {file_path}")

def traverse_and_convert(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                convert_file(file_path)

# Start conversion from the current directory
if __name__ == "__main__":
    traverse_and_convert(os.getcwd())