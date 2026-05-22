# Genesys My Queues Activity Dashboard - PKCE PoC

Client-side PoC dashboard for Genesys Cloud that authenticates with OAuth Authorization Code + PKCE and displays queue statistics for queues assigned to the logged-in user.

## What it shows

- Queue daily statistics: offered, answered, abandoned, service level, average handle, average wait, max wait.
- Queue activity/observation statistics: waiting, longest waiting, on queue, off queue, interacting, idle.
- Service level by hour chart with 80% target line.
- Agent status by queue: agent name, presence, routing status and duration.
- Queue membership summary.

## Genesys Cloud endpoints used

- `GET /api/v2/routing/queues/me`
- `POST /api/v2/analytics/conversations/aggregates/query`
- `POST /api/v2/analytics/queues/observations/query`
- `POST /api/v2/analytics/routing/activity/query`
- `GET /api/v2/users?id=...`

## Configuration

Edit `public/config.js`:

```js
window.APP_CONFIG = {
  region: "mypurecloud.ie",
  clientId: "PASTE_YOUR_PKCE_CLIENT_ID_HERE",
  redirectUri: "",
  mediaType: "voice",
  refreshSeconds: 60,
  onlyJoinedQueues: false,
  queueIdAllowList: [],
  queueIdDenyList: [],
  timeZone: "Europe/Belgrade"
};
```

`redirectUri` can stay empty. The app then uses the current page URL, for example `http://localhost:3000/` locally or the Vercel production URL after deployment.

## Genesys OAuth client

Create an OAuth client with Authorization Code + PKCE. Add redirect URIs that you will use, for example:

- `http://localhost:3000/`
- `https://your-vercel-project.vercel.app/`

No client secret is used in this browser project.

## Local run

```bash
npm install
npm run dev
```

Open `http://localhost:3000/`.

## Vercel deployment

1. Push this folder to GitHub.
2. Import/connect the GitHub repository in Vercel.
3. Vercel should use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add the Vercel URL as a redirect URI in the Genesys Cloud OAuth client.
5. Update `public/config.js` with the OAuth client ID and push again.

## Important PoC notes

This project is intended for functional validation and demo purposes. Before production use, review permissions, error handling, styling, rate limits, deployment governance, and whether queue/user visibility must be restricted further by division, group or an external mapping rule.
