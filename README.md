# Fuzora - Automation Builder

Fuzora is a powerful SaaS automation builder that helps you streamline your workflow by connecting your favorite tools and automating tasks with ease. With Fuzora, you can link your Google Drive to monitor changes in real time, send notifications or custom messages through Slack and Discord, and automate the creation of entries in Notion databases. Designed to save time and reduce manual effort, Fuzora simplifies your work, allowing you to focus on what matters most.

![Fashion Bio-Link Website (2)](https://github.com/user-attachments/assets/1bff524f-9a2d-449b-8b97-32da53bb2709)

## Features

- 🏢 Connect users Google Drive to the app
- 🌐 Watch for changes in google drive
- 🚀 Connect users slack to send notification and custom messages
- 💻 Connect users discord to send notification and custom messages
- 🔄 Connect users Notion to create entries in a database
- 🛒 Stripe to charge month to month subscriptions 
- 🔐 Payments based on credits consumed
- 💳 Beautiful redesigned node interface
- 🚨 Drag and drop node builder
- 💰 Create automations flows
- 📊 Create a sequence of actions to fire after a trigger event happens
- 🗺️ Mini map to see all workflow nodes
- ⭐️ Infinite Canvas
- ✨ Expandable sidebar with drag feature
- ⚡️Aceternity UI
- ☀️ Light & Dark mode
- 📄 Functioning beautiful landing page

## Built with

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Aceternity UI](https://ui.aceternity.com/)
- [Clerk](https://clerk.com/)
- [Stripe](https://stripe.com/)
- [React Flow](https://reactflow.dev/)
- [Neon](https://neon.tech/)
- [Prisma](https://www.prisma.io/)
- [Upload Care](https://uploadcare.com/)
- [NGrok](https://ngrok.com/)

### Tools
- [Biome](https://biomejs.dev/)
- [Husky](https://typicode.github.io/husky/)

## Feature Requests

To request a feature open a [GitHub issue](https://github.com/anayatkhan1/Fuzora/issues).

 ## Contribution Guidelines

Thank you for considering contributing to our SAAS Automation Builder project! Please follow these guidelines to ensure smooth collaboration:

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine:
3. Create a new branch for your changes:

    ```bash
    git checkout -b feature/your-feature-name
    ```

4. Make your changes and ensure they adhere to the project's coding style and guidelines.
5. Test your changes thoroughly to avoid introducing bugs.
6. Commit your changes with clear and descriptive commit messages:

    ```bash
    git commit -m 'feat: Add your descriptive commit message'
    ```
    ``Note:`` Before committing changes, ensure you include one of these tags in your commit message: ```feat, fix, wip, patch, build```.

7. Push your changes to your forked repository:

    ```bash
    git push origin feature/your-feature-name
    ```

8. Open a pull request against the `main` branch of the original repository.
9. Provide a clear and concise description of your changes in the pull request, along with any relevant information.
10. Ensure your pull request passes all checks and tests before requesting a review.

### Setting Up Environment Variables

To run the project locally, you need to set up the following environment variables:

```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

DATABASE_URL=

## Development URL
NEXT_PUBLIC_URL=https://localhost:3000
NEXT_PUBLIC_DOMAIN=localhost:3000
NEXT_PUBLIC_SCHEME=https://

NEXT_PUBLIC_GOOGLE_SCOPES=https://www.googleapis.com/auth/drive
NEXT_PUBLIC_OAUTH2_ENDPOINT=https://accounts.google.com/o/oauth2/v2/auth

NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC=https://cdn.jsdelivr.net/npm/@uploadcare/blocks@
NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE=/web/lr-file-uploader-regular.min.css

DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
DISCORD_TOKEN=
DISCORD_PUBLICK_KEY=
NEXT_PUBLIC_DISCORD_REDIRECT=https://discord.com/oauth2/authorize?client_id=*CLIENTID*&response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&scope=identify+guilds+connections+guilds.members.read+email+webhook.incoming

NOTION_API_SECRET=
NOTION_CLIENT_ID=
NOTION_REDIRECT_URI=https://localhost:3000/api/auth/callback/notion
NEXT_PUBLIC_NOTION_AUTH_URL=https://api.notion.com/v1/oauth/authorize?client_id=*CLIENTID*&response_type=code&owner=user&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fnotion

# ,groups:read,mpim:read,im:read'

SLACK_SIGNING_SECRET=
SLACK_BOT_TOKEN=
SLACK_APP_TOKEN=
SLACK_CLIENT_ID=
SLACK_CLIENT_SECRET=
SLACK_REDIRECT_URI=https://localhost:3000/api/auth/callback/slack
NEXT_PUBLIC_SLACK_REDIRECT=https://slack.com/oauth/v2/authorize?client_id=*CLIENTID*&scope=chat:write,channels:read,groups:read,mpim:read,im:read&user_scope=chat:write,channels:read,groups:read,mpim:read,im:read&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fslack

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
OAUTH2_REDIRECT_URI=https://electric-grizzly-7.clerk.accounts.dev/v1/oauth_callback
NGROK_URI=
CRON_JOB_KEY=
STRIPE_SECRET=

```
You can set these environment variables by creating a `.env.local or .env` file in the root directory of the project and adding the variables with their respective values:
