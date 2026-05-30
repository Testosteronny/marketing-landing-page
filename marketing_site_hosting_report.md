# Sueleli Marketing Site Hosting Report

Status: local mockup phase

## Decision

The public website is a separate static marketing/legal/support surface. It has no runtime dependency on the mobile app, Appwrite API, OCR gateway, Sentry, or any user account system.

This means the website can be developed, deployed, moved, and cached independently from the privacy-sensitive mobile backend.

## Scope

Included:

- Product positioning for Sueleli.
- Early access / launch interest copy.
- Privacy-first trust messaging.
- Support, privacy policy, imprint, and terms placeholders until final legal text exists.
- Pay-what-you-want / TWINT messaging later, once the website payment flow is decided.

Excluded:

- App login.
- User dashboards.
- Financial calculations.
- OCR upload.
- Appwrite account access.
- Backup restore access.
- Any storage of financial data.

## Recommended Structure

Keep the marketing site in its own folder inside the current repository for now:

```txt
marketing_site/mockup/
```

Later, if the website grows into a larger project, it can be split into a separate repository without changing the mobile app architecture.

## Local Appwrite Deployment

Local Appwrite Sites is suitable for the mockup because it lets us test the hosting path now while keeping production DNS untouched.

Current local target:

```txt
Appwrite project: sueleli-local
Appwrite site: sueleli-landing-page
Latest local deployment: 6a1ab01f5374e851eb51
Rendering: static
Backend connection: none
```

GitHub source repository:

```txt
https://github.com/Testosteronny/sueleli-website
Production branch: main
Site root directory: mockup
```

The local deployment should be treated as disposable. It is for design review and hosting workflow testing only.

Git-backed Appwrite deployments are the target workflow. Local Appwrite still needs its GitHub/VCS integration configured before it can deploy automatically from this repository.

Local Appwrite currently serves the site through this generated Sites domain:

```txt
astro-starlight.sites.localhost
```

On Windows, this hostname may need a hosts-file entry before a normal browser can resolve it:

```txt
127.0.0.1 astro-starlight.sites.localhost
```

## Public Preview With A Tunnel

A tunnel makes a service running on your local machine reachable from the internet through a temporary or configured public URL.

Without a tunnel:

```txt
http://localhost
```

only works on your own computer.

With a tunnel:

```txt
https://mock.sueleli.ch
```

can forward to your local Appwrite Site while your computer and Appwrite are running.

Recommended tunnel use:

- Use it only for temporary public previews.
- Prefer a subdomain like `mock.sueleli.ch`.
- Do not expose private backend/admin surfaces publicly.
- Do not use a tunnel as the final production hosting setup.

Recommended tunnel provider:

```txt
Cloudflare Tunnel
```

Reason: it avoids router port forwarding, supports custom domains, and can be removed cleanly when production hosting is ready.

## Production Plan

Production should run from the same static site source, deployed to the production hosting target.

Recommended production domains:

```txt
sueleli.ch       -> marketing site
www.sueleli.ch   -> marketing site
api.sueleli.ch   -> Appwrite API, only if needed for web-origin Appwrite API access
```

Because the marketing site has no backend logic, the production migration should be simple:

1. Keep the website source in Git.
2. Deploy the same static site to production Appwrite Sites on Jelastic or another static host.
3. Point DNS from the preview/local target to the production target.
4. Keep local Appwrite for development only.

## Migration Risk

Low, as long as:

- No production user data is created in local Appwrite.
- The website does not depend on local Appwrite APIs.
- DNS is changed only after the production deployment is verified.
- Legal/support pages are versioned in Git.

## Open Decisions

- Whether the final marketing site stays in this repo or gets a separate GitHub repository.
- Whether the final production site uses Appwrite Sites, a simpler static host, or both.
- Which tool will handle pay-what-you-want payments on the website.
- Exact legal copy for privacy policy, imprint, terms, and support.
