import os
import sys
import time
import urllib.request
import subprocess
import ssl

# Configuration
URL = "https://torquefoundryadvisory.com/build-id.txt"
TIMEOUT_SECONDS = 300  # 5 minutes
POLL_INTERVAL = 10     # 10 seconds

def get_local_commit():
    try:
        commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode('utf-8').strip()
        print(f"📍 Local HEAD Commit: {commit}")
        return commit
    except Exception as e:
        print(f"❌ Failed to get local git commit: {e}")
        sys.exit(1)

def check_live_commit():
    try:
        # Create unverified context to avoid SSL certificate issues if any (though site should be valid)
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        
        with urllib.request.urlopen(URL, context=ctx, timeout=5) as response:
            if response.status != 200:
                return None
            content = response.read().decode('utf-8').strip()
            # Simple parser for "commit=SHA" format
            for line in content.split('\n'):
                if line.startswith("commit="):
                    return line.split('=')[1].strip()
            return None
    except Exception:
        return None

def main():
    print(f"🔍 Starting Deployment Verification Loop...")
    print(f"🌐 Target: {URL}")
    print(f"⏱️  Timeout: {TIMEOUT_SECONDS}s")
    
    target_commit = get_local_commit()
    start_time = time.time()
    
    while True:
        elapsed = time.time() - start_time
        if elapsed > TIMEOUT_SECONDS:
            print(f"\n❌ TIMEOUT ({TIMEOUT_SECONDS}s): Deployment did not update in time.")
            print("   Possible causes: GitHub Action failed, Build failed, or Nginx caching.")
            sys.exit(1)
            
        live_commit = check_live_commit()
        
        if live_commit == target_commit:
            print(f"\n✅ SUCCESS: Live site matches local commit ({target_commit})")
            print(f"🚀 Deployed in {elapsed:.1f} seconds.")
            sys.exit(0)
        
        status_msg = f"⏳ WAITING... (Deployed: {live_commit[:7] if live_commit else 'Unknown'} | Target: {target_commit[:7]}) | Elapsed: {elapsed:.0f}s"
        sys.stdout.write(f"\r{status_msg}")
        sys.stdout.flush()
        
        time.sleep(POLL_INTERVAL)

if __name__ == "__main__":
    main()
