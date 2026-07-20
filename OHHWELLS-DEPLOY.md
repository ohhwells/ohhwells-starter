# ohhwells-deploy

CLI tool for deploying vibe-coded Next.js sites to the OhhWells platform.

## Installation

```bash
npm install -g ohhwells-deploy
```

Or use without installing:

```bash
npx ohhwells-deploy <command>
```

## Commands

### `ohhwells login`

Authenticate with your OhhWells account. Opens a browser window to complete sign-in. Your token is stored locally at `~/.ohhwells/auth.json` (user-read-only permissions).

```bash
npx ohhwells-deploy login
# or, if installed globally:
ohhwells login
```

### `ohhwells claim`

Invite a client to claim ownership of a site. This generates a verification code and sends an email to the client with a setup link.

```bash
ohhwells claim --site=<subdomain> --client-email=<email>
```

**Options:**

| Flag             | Description                                   |
| ---------------- | --------------------------------------------- |
| `--site`         | Site subdomain to claim (e.g. `bloom-yoga`)   |
| `--client-email` | Client email to send the verification code to |

### `ohhwells deploy`

Build and deploy your Next.js project to OhhWells.

```bash
ohhwells deploy --site=<subdomain>
ohhwells deploy --site=<subdomain> --client-email=<email>
```

**Options:**

| Flag              | Description                                                       |
| ----------------- | ----------------------------------------------------------------- |
| `--site`          | Subdomain of the site to deploy to (e.g. `clientname`)            |
| `--client-email`  | After deploy, send a claim invitation to this client email        |

If `--site` is omitted, the CLI reads `subdomain` from `ohhwells.json` in the project root.

### `ohhwells logout`

Remove locally stored credentials.

```bash
ohhwells logout
```

---

## Project config file

Create an `ohhwells.json` in your project root to avoid passing flags every time:

```json
{
  "subdomain": "clientname"
}
```

---

## Deploy flow

1. Runs `next build` locally — if the build fails, the deploy is aborted with a clear error
2. Zips the project source (excludes `node_modules`, `.next`, `out`, `.env*`, `.git`)
3. Uploads to OhhWells backend
4. Backend deploys to Vercel as a production deployment

After a successful deploy, the CLI prints:

```
Deployed successfully!
Public URL:  https://clientname.ohhwells.site
Vercel URL:  https://ohhwells-clientname-xxxx.vercel.app
```

Use the **Vercel URL** to preview the site immediately. The **Public URL** goes live once DNS is configured.

---

## Permissions

You must be the **owner** or a **collaborator** on the site record to deploy. Unauthorised deploy attempts fail with a clear error.

---

## Requirements

- Node.js 18+
- Next.js project
- OhhWells account with an active site provisioned
