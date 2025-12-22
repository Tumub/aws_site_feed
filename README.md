# TorqueFoundry Advisory (Website)

This repository hosts the **TorqueFoundry Advisory** website.
It is a "Clean Room" repository containing **only** the production Vite web application.

## 🚧 Repository Guardrails

**Strict Rules Enforced:**
This repository allows **ONLY** website source code.
*   ❌ NO `packages/`, `archive/`, `docs/` directories.
*   ❌ NO `.pem`, `.key`, `.pfx` keys (Secrets only).
*   ❌ NO Office documents (`.docx`, `.pptx`, `.pdf`).
*   ❌ NO large dumps (`all_files.txt`).

### One-Time Setup (Required)
To prevent accidental commits of forbidden files, install the local Git hook:

**Windows (PowerShell):**
```powershell
.\scripts\install-hooks.ps1
```

**Linux/Mac:**
```bash
cp scripts/forbidden-check.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

## 🚀 Local Development

1.  **Install Dependencies:**
    ```bash
    npm ci
    ```
2.  **Start Dev Server:**
    ```bash
    npm run dev
    ```
3.  **Build for Production:**
    ```bash
    npm run build
    ```

## 🌍 Deployment

**Automatic Deployment:**
Pushes to `main` trigger the GitHub Actions workflow `.github/workflows/deploy_ec2.yml`.

1.  **Checks:** Runs `scripts/forbidden-check.sh`.
2.  **Builds:** `npm run build` -> `dist/`.
3.  **Deploys:** Atomic symlink swap on AWS EC2 (`/var/www/torquefoundry`).
4.  **Verifies:** Checks `http://52.58.88.177/build-id.txt` matches commit SHA.

## 🧭 Next Agent Notes (GitHub / Deployment)

### What changed (safe)

- Removed broken/legacy workflows that referenced old monorepo paths:
    - Deleted `.github/workflows/deploy.yml` (legacy GitHub Pages deploy)
    - Deleted `.github/workflows/ci.yml` (referenced `./apps/torquefoundry-web`)
- Strengthened `.gitignore` to prevent committing private key formats:
    - `*.pem`, `*.key`, `*.pfx`, `*.p12`

### How it was shipped (to avoid impacting EC2)

- Changes were pushed to a non-production branch: `security-immediate-actions`.
- `main` was intentionally not pushed from this workspace session to avoid triggering the EC2 deploy workflow.

### Next safe steps

1. Open a PR from `security-immediate-actions` → `main`.
2. Merge only when ready for a deploy (merge to `main` will trigger `.github/workflows/deploy_ec2.yml`).

### Notes / gotchas

- If a future agent sees a stuck state: run `git status`. If it shows a rebase in progress, finish it with `git rebase --continue` or abort with `git rebase --abort`.
- If you see key files present locally (e.g. `*.pem`), they should remain untracked; store them outside the repo if possible.
