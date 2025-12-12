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
