# Sueleli Marketing Site

Static marketing site for Sueleli.

This repository is intentionally separate from the mobile app and backend. The site has no runtime connection to Appwrite, OCR, Sentry, or user account data.

GitHub repository:

```txt
https://github.com/Testosteronny/sueleli-website
```

## Structure

```txt
mockup/                         Static site source deployed by Appwrite Sites
marketing_site_hosting_report.md Hosting and migration notes
```

## Local Preview

Open `mockup/index.html` directly in a browser, or serve the folder with any static server.

## Appwrite Sites

The local Appwrite Site should use:

```txt
Site ID: sueleli-landing-page
Root directory: mockup
Install command: echo no install
Build command: echo no build
Output directory: .
Adapter: static
Production branch: main
```

Git-backed deployments require the self-hosted Appwrite GitHub/VCS integration to be configured first. Until the local Appwrite instance has a GitHub App installed, Appwrite can accept CLI/manual deployments but cannot automatically deploy from this GitHub repository.
