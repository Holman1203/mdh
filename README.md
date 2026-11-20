# MAMREX HUB website

Official website for Mamrex Digital Hub Ltd. Next.js (App Router) + TypeScript + Tailwind CSS, statically exported. No database and no paid services.

## Run locally

```bash
npm install
cp .env.example .env.local     # then edit the values (see below)
npm run dev                    # http://localhost:3000
```

Production check: `npm run build` creates the static site in `out/`.

## Edit the content

All page text lives in **`lib/site-data.ts`** (headings, paragraphs, tables, contact details). Change the text there; no layout code needs touching. The original profile is kept in `content/mamrex-profile.md` for reference.

- Brand colours: `tailwind.config.ts` (`brand` = indigo `#120186`, `accent` = orange `#FF4221`). Only four colours are used; softer shades use opacity (e.g. `text-black/60`, `bg-brand/5`).
- Logos: `public/logo-full.png`, `public/logo-icon.png` (also the favicon). Open Graph image: `public/og-image.png` (1200×630).
- Corporate profile PDF: add your file as **`public/mamrex-corporate-profile.pdf`**. The "Download Corporate Profile (PDF)" buttons point to it.
- Search the code for `TODO` to find the placeholders to replace (real photos, a white logo for dark areas).

Deliberately **not** published: TIN, stamp duty certificate number, share capital, and the "certifications to be confirmed" placeholder.

## Set up the contact form (Web3Forms)

1. Go to <https://web3forms.com>, enter `mamrexhub@gmail.com` and copy the free access key they email you.
2. Locally: put it in `.env.local` as `NEXT_PUBLIC_WEB3FORMS_KEY=your-key`.
3. On Vercel: Project → Settings → Environment Variables → add `NEXT_PUBLIC_WEB3FORMS_KEY` with the same value (and redeploy).

Until a real key is set the form shows a polite "not connected yet" message. (The key is public by design with Web3Forms; you can restrict it to your domain in their dashboard.)

## Deploy to Vercel via GitHub (free)

1. Create a GitHub repository and push this folder (`.env.local` is git-ignored).
2. On <https://vercel.com>, choose **Add New → Project**, import the repository. Vercel detects Next.js; leave the defaults.
3. Add the environment variables: `NEXT_PUBLIC_WEB3FORMS_KEY` and `NEXT_PUBLIC_SITE_URL` (your final address, e.g. `https://www.yourdomain.com`; used for the sitemap, Open Graph and schema).
4. Click **Deploy**. Every push to `main` redeploys automatically.

### Custom domain

Project → Settings → Domains → add your domain and follow the DNS instructions Vercel shows (an `A` record for the root domain and a `CNAME` for `www`). HTTPS is automatic. After the domain is live, set `NEXT_PUBLIC_SITE_URL` to it and redeploy.

## Hero

The home-page hero fades slowly between six photos of young African and Nigerian people in learning and tech, with a gentle slow zoom, entirely on its own: it does not react to the mouse. A small button pauses it, and visitors who prefer reduced motion see a still photo. The code is `components/HeroScene.tsx`; the photos and captions are in `lib/site-data.ts` (`heroSlides`) and `public/hero/`.

Photos (free under the Unsplash Licence; credit is optional):

- Developers in Lagos: <https://unsplash.com/photos/man-using-black-laptop-computer-kwzWjTnDPLk>
- Young man with a laptop (Asaba, Nigeria): <https://unsplash.com/photos/2kyMYSkI5ys>
- School pupils in Lagos: <https://unsplash.com/photos/jEEYZsaxbH4>
- Young woman at her laptop: <https://unsplash.com/photos/young-woman-smiling-while-working-on-a-laptop-at-desk-UHfJI_lZoPo>
- Couple with a laptop: <https://unsplash.com/photos/a-man-and-a-woman-are-looking-at-a-laptop-KljeL88lgkk>
- Young woman with headphones: <https://unsplash.com/photos/a-woman-sitting-in-front-of-a-laptop-computer-r2fZ65O6lWY>

Swap in real photos of your own hub when you have them.
