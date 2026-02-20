Create a complete private web application called "GrammyAi" using Next.js with the following requirements:

1. **Project Structure**:
   - Use the Next.js App Router structure.
   - Include folders: `app`, `styles`, `lib`.
   - Create the following files:
     - `app/layout.jsx`
     - `app/page.jsx` (login page with password)
     - `app/feed/page.jsx` (Instagram-style feed)
     - `app/dm/page.jsx` (direct messaging UI)
     - `app/api/login/route.js` (password API)
     - `app/api/ai/route.js` (AI proxy API)
     - `styles/globals.css`
     - `package.json`
     - `next.config.js`
     - `.env.local` for environment variables

2. **Login System**:
   - Require a password defined in `.env.local` (`SITE_PASSWORD`) for access.
   - Return HTTP 200 if the password is correct, otherwise 401.
   - Login page should have a simple input and submit button styled in dark mode like Instagram.

3. **Feed Page**:
   - Display a list of posts with an image, character name, and caption.
   - Each post should have a "Message" button linking to the DM page.
   - Use a mobile-first, Instagram-like dark theme.

4. **DM Page**:
   - Implement a chat interface with a scrolling messages container.
   - Include an input field and send button.
   - Messages from the user and AI are styled differently (right-aligned for user, left-aligned for AI).
   - Messages are sent to `/api/ai/route.js` and the AI responds in-character.

5. **AI Proxy API**:
   - Create `/api/ai/route.js` to forward messages to a configurable AI provider (OpenAI, Anthropic, etc.).
   - Read provider details from `.env.local`:
     - `AI_BASE_URL`
     - `AI_API_KEY`
     - `AI_MODEL`
   - Include a system prompt that forces the AI to respond in-character as a celebrity inside the social network.
   - Return only the AI-generated reply to the frontend.

6. **Environment Variables** (`.env.local`):
   - `SITE_PASSWORD=GrammyPrivateAccess`
   - `AI_BASE_URL=https://api.openai.com/v1/chat/completions`
   - `AI_API_KEY=YOUR_PROVIDER_KEY`
   - `AI_MODEL=gpt-4.1-mini`

7. **Styling**:
   - Use Tailwind CSS or plain CSS in `globals.css`.
   - Dark theme with Instagram-like accent colors.
   - Responsive and mobile-first design.

8. **Deployment**:
   - The project must be deployable on Vercel directly from GitHub.
   - Include instructions in the README for adding environment variables on Vercel.
   - Ensure the site is private and only accessible with the password.

9. **Additional Features**:
   - AI should maintain conversation context using message history.
   - Feed should simulate a real social network (likes, comments, and posts in the future).
   - The code should be modular and easy to extend with multiple AI characters.

10. **Commit Instructions**:
   - Each file should be created in the correct path on GitHub (`folder/filename.ext`) so that Vercel can build the project.
   - Ensure proper naming of files to match Next.js App Router conventions.

**Goal**: After importing this GitHub repository into Vercel and setting the environment variables, the website should launch immediately as a private, Instagram-style AI roleplay social network with working login, feed, and DM pages.