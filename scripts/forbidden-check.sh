#!/bin/bash
# scripts/forbidden-check.sh

echo "🛡️  Running Repo Guardrails..."
EXIT_CODE=0

# 1. Forbidden Directories
# Fails if these folders exist in the repo
FORBIDDEN_DIRS=("packages" "archive" "docs" "apps" "node_modules" "dist" "industrial-co-pilots-main")

for dir in "${FORBIDDEN_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo "❌ FORBIDDEN DIRECTORY: $dir/"
        echo "   Rule: Repo must be flat. No legacy folders allowed."
        EXIT_CODE=1
    fi
done

# 2. Forbidden File Extensions
matches=$(git ls-files "*.pem" "*.key" "*.pfx" "*.p12" "*.docx" "*.pptx" "*.pdf" "*.xlsx" "all_files*.txt" "clean_manifest*.txt")

if [ -n "$matches" ]; then
    echo "❌ FORBIDDEN FILES DETECTED:"
    echo "$matches"
    echo "   Rule: No keys, office docs, or dumps allowed."
    EXIT_CODE=1
fi

# 3. Legacy Path Scan in Workflows
# Fails if we see old working directories being defined
echo "🔍 Scanning workflows for legacy paths..."
if grep -rE "working-directory: \./apps/|working-directory: \./industrial|cd apps/|cd industrial" .github/workflows/; then
    echo "❌ LEGACY PATH DETECTED in .github/workflows/"
    echo "   Rule: Workflows must run from root. No 'cd apps/...' allowed."
    EXIT_CODE=1
fi

if [ $EXIT_CODE -eq 0 ]; then
    echo "✅ Guardrails Passed. Repo is clean."
else
    echo "⛔ GUARDRAILS FAILED"
fi

exit $EXIT_CODE
