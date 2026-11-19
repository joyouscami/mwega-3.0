# Mwega website

Business systems consultancy site for established founders. Next.js App Router, plain CSS, deployed on Vercel.

- Text and data: `content/site.js` (hero, problem, capabilities, method, diagnostic, offers, articles, case studies, legal text)
- Styles and design tokens: `app/globals.css`
- Components: `components/` (`ui.jsx` shared, `pages.jsx` page bodies, `interactive.jsx` client components, form and navigation)
- Routes: `app/` (one folder per page). Legacy URLs are redirected in `next.config.mjs`
- Contact form: sends through Web3Forms when `NEXT_PUBLIC_WEB3FORMS_KEY` is set, otherwise posts to `app/api/contact/route.js` (Resend). See `.env.example`

Run locally with `npm install`, then `npm run dev`. Check a production build with `npm run build`.

## Deploying to Vercel
1. Push the `mwega-site` folder to the Git repository connected to the Vercel project.
2. In Project Settings, Environment Variables, keep `NEXT_PUBLIC_WEB3FORMS_KEY` and `NEXT_PUBLIC_SITE_URL=https://mwega.com`. Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` only if you want the API route as a fallback.
3. Run `npm run build` locally first, then deploy. Redeploy after any environment change.
Reconnected with this new version on Vercel