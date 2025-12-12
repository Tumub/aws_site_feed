$hookPath = ".git\hooks\pre-commit"
$scriptContent = "#!/bin/sh
./scripts/forbidden-check.sh
"

Set-Content -Path $hookPath -Value $scriptContent -Encoding ASCII
# No chmod needed on Windows usually, but good practice if using Git Bash
# Check if git is available to set exec bit internally if needed, but usually just file existence works for Git for Windows if shebang is sh.
Write-Host "✅ Pre-commit hook installed to $hookPath"
Write-Host "   It will run scripts/forbidden-check.sh before every commit."
