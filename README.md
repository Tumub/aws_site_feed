# TorqueFoundry Advisory

## Repository Overview

This repository hosts the digital presence and operational assets for **TorqueFoundry Advisory**.

### Directory Structure

*   **/apps/torquefoundry-web/** (Canonical)
    *   The active, deployable web application.
    *   **Stack:** React + Vite + Tailwind CSS + shadcn/ui.
    *   **Deploy:** Deploys to AWS via GitHub Actions.
*   **/packages/portfolio/**
    *   Marketing assets, presentation decks, sales operations, and templates.
    *   **Key File:** `00_PROJECT_ASSETS/Marketing/MASTER_PRESENTATION_BRIEF.md` (Brand Source of Truth).
*   **/docs/**
    *   Strategy documents, operating procedures, and decision logs.
*   **/archive/**
    *   Legacy backups, zip files, and the previous `industrial-co-pilots-main` codebase.

---

## Local Development (Web App)

To run the specific website application locally:

```bash
cd apps/torquefoundry-web
npm install
npm run dev
```

## Building for Production

```bash
cd apps/torquefoundry-web
npm run build
```

## Brand & Strategy

For all brand guidelines, voice, and visual standards, refer to:
`packages/portfolio/00_PROJECT_ASSETS/Marketing/MASTER_PRESENTATION_BRIEF.md`

