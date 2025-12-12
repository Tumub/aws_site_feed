
import sys
import re

def fix_spa_routing(config_file):
    print(f"Reading {config_file}...")
    try:
        with open(config_file, 'r') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file: {e}")
        sys.exit(1)

    # 1. Find the start of 'location / {'
    # Regex for "location / {" allowing for whitespace
    loc_pattern = re.compile(r"location\s+/\s+\{")
    match = loc_pattern.search(content)
    
    if not match:
        print("❌ Could not find 'location / {' block. Skipping.")
        sys.exit(1)

    start_idx = match.end()
    
    # 2. Find the closing brace for this block
    # Simple brace counting starting from match
    brace_count = 1
    end_idx = -1
    
    for i in range(start_idx, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            
        if brace_count == 0:
            end_idx = i
            break
            
    if end_idx == -1:
        print("❌ Could not find closing brace for location block. Malformed config?")
        sys.exit(1)

    print(f"Found 'location /' block from char {match.start()} to {end_idx}")

    # 3. Extract block content
    block_content = content[start_idx:end_idx]
    
    # 4. Clean up existing try_files inside this block ONLY
    # We want to remove any existing "try_files ...;" lines to avoid duplicates
    # including the one we just corrupted or the default =404
    clean_block_content = re.sub(r"try_files\s+[^;]+;", "", block_content)
    
    # 5. Insert the correct SPA routing directive
    # We add it at the beginning of the block logic
    spa_directive = "\n        try_files $uri $uri/ /index.html;"
    
    # Check if we made changes (other than just adding the directive)
    if "try_files" in block_content and "/index.html" in block_content and "404" not in block_content:
         # Rough check if it's already good
         pass

    new_block_content = spa_directive + clean_block_content
    
    # 6. Reconstruct full content
    new_full_content = content[:start_idx] + new_block_content + content[end_idx:]
    
    # 7. Write back
    try:
        with open(config_file, 'w') as f:
            f.write(new_full_content)
        print("✅ Successfully updated location / block with SPA routing.")
    except Exception as e:
        print(f"❌ Error writing file: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python ensure_spa_routing.py <path_to_nginx_conf>")
        sys.exit(1)
    
    fix_spa_routing(sys.argv[1])
