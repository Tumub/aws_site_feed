#!/bin/bash
# scripts/forbidden-check.sh

echo "Running Forbidden Files Check..."
EXIT_CODE=0

# Define forbidden file patterns (git ls-files uses glob specs)
# We check tracked files only.

# 1. Forbidden Directories
FORBIDDEN_DIRS=("packages" "archive" "docs" "apps" "node_modules" "dist")

for dir in "${FORBIDDEN_DIRS[@]}"; do
    if [ -d "$dir" ] && git ls-files --error-unmatch "$dir" > /dev/null 2>&1; then
        echo "❌ FORBIDDEN DIRECTORY DETECTED: $dir/"
        echo "   Fix: git rm -r --cached $dir && rm -rf $dir"
        EXIT_CODE=1
    fi
done

# 2. Forbidden Extensions
# We use git ls-files with pattern matching
matches=$(git ls-files "*.pem" "*.key" "*.pfx" "*.p12" "*.docx" "*.pptx" "*.pdf" "*.xlsx" "all_files*.txt" "clean_manifest*.txt")

if [ -n "$matches" ]; then
    echo "❌ FORBIDDEN FILES DETECTED:"
    echo "$matches"
    echo "   Fix: git rm --cached <file> && rm <file>"
    EXIT_CODE=1
fi

if [ $EXIT_CODE -eq 0 ]; then
    echo "✅ Repo is clean."
else
    echo "⛔ GUARDRAIL CHECK FAILED."
fi

exit $EXIT_CODE
