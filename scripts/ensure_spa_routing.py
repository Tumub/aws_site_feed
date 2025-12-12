
import sys
import re
import os

def fix_spa_routing(config_file):
    print(f"Checking {config_file} for SPA routing...")
    
    try:
        with open(config_file, 'r') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file: {e}")
        sys.exit(1)

    # 1. Check if file contains our domain
    if "torquefoundryadvisory.com" not in content:
        print("Domain not found in this config file. Skipping.")
        sys.exit(0)

    # 2. Check if try_files already exists (simple check first)
    # We specifically want the SPA catch-all
    if "try_files $uri $uri/ /index.html;" in content:
        print("✅ SPA routing (try_files) already present.")
        sys.exit(0)

    print("⚠️ SPA routing missing. Attempting to inject...")

    # 3. Locate the 'location / {' block inside the server block
    # This is a heuristic regex. 
    # We look for 'location / {' and insert try_files at the beginning of it.
    
    # Regex explanation:
    # location \s+ / \s+ \{  -> matches "location / {" with optional spaces
    pattern = re.compile(r'(location\s+/\s+\{)')
    
    if not pattern.search(content):
        print("❌ Could not find 'location / {' block. Manual intervention required.")
        sys.exit(1)
        
    # Replacement: Add try_files immediately after "location / {"
    new_content = pattern.sub(r'\1\n        try_files $uri $uri/ /index.html;', content)
    
    # 4. Write back
    try:
        with open(config_file, 'w') as f:
            f.write(new_content)
        print("✅ injected try_files directive.")
    except Exception as e:
        print(f"❌ Error writing file: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python ensure_spa_routing.py <path_to_nginx_conf>")
        sys.exit(1)
    
    fix_spa_routing(sys.argv[1])
