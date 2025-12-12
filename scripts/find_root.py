import re
import sys

config_file = "/tmp/nginx_dump.conf"
target_domain = "torquefoundryadvisory.com"

def find_root():
    try:
        with open(config_file, 'r') as f:
            content = f.read()
    except Exception:
            print("")
            return

    # Clean up Windows newlines if any
    
    lines = content.splitlines()
    current_server_block = []
    in_server = False
    brace_count = 0
    
    server_blocks = []
    
    for line in lines:
        trimmed = line.strip()
        if not trimmed or trimmed.startswith("#"):
            continue
            
        if "server {" in line:
            in_server = True
            current_server_block = []
            brace_count = 1
            # Add line to block
            current_server_block.append(line)
        elif in_server:
            current_server_block.append(line)
            brace_count += line.count("{")
            brace_count -= line.count("}")
            if brace_count <= 0:
                in_server = False
                server_blocks.append("\n".join(current_server_block))
                
    # Now iterate blocks to find our domain
    for block in server_blocks:
        # Check if this block has our server_name
        if target_domain in block:
            # verify it's accurate server_name directive
            if re.search(r'server_name\s+.*' + re.escape(target_domain), block):
                # Found the block. Find root.
                root_match = re.search(r'^\s*root\s+(.*?);', block, re.MULTILINE)
                if root_match:
                    print(root_match.group(1).strip())
                    return

    print("") # Not found

if __name__ == "__main__":
    find_root()
