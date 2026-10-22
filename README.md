# ModelFlow Starter
This is a front-end prototype, not a deployed production service. It uses sample data in browser memory and has no real authentication, database, click tracking, Telegram integration, or AI connection yet.

## Run locally
1. Install Node.js 20 or later.
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000`

## Deploy
Upload the files to a GitHub repository and import it into Vercel using the default Next.js settings. A public URL is created only after deployment.

## Before production
- Add server-side authentication and permissions.
- Add a database and audit logs.
- Add privacy notices and data minimization.
- Implement real referral attribution, distinguishing clicks, bot starts, first messages, and qualifying conversations.
- Keep AI API keys on the server, never in browser code.
- Connect Telegram through authorized bot/API access. A link to a personal Telegram account does not by itself provide reliable message-event tracking.
- Follow each social platform's messaging and automation policies.
