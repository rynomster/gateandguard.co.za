# Gate & Guard Projects Website

Official production static marketing website for **Gate & Guard Projects** (`https://gateandguard.co.za` / `https://rynomster.github.io/gateandguard.co.za/`).

Designed for speed, security trustworthiness, and mobile accessibility, built with Astro, TypeScript, and vanilla CSS.

## 1. Prerequisites

- **Node.js**: v20 or higher (v22 recommended)
- **npm**: v10 or higher

## 2. Local Development

To run the site locally:

```bash
# Install dependencies
npm ci

# Start local Astro development server
npm run dev
```

Open `http://localhost:4321/gateandguard.co.za/` in your browser.

## 3. Production Build & Validation

To test the production build locally:

```bash
# Type check Astro components and TypeScript
npm run check

# Generate static HTML/CSS/JS output in dist/
npm run build

# Preview static build locally
npm run preview
```

## 4. Where to Edit Business Details

All core business details are centralized in `src/data/site.ts`.

Edit `src/data/site.ts` to update:
- Phone numbers (`phone`, `phoneFormatted`)
- WhatsApp number (`whatsapp`, `whatsappFormatted`)
- Email address (`email`)
- Service areas (`serviceAreas`)
- Operating hours (`businessHours`)
- Accreditation / COC notes (`cocDetails`)
- Trust metrics (`trustMetrics`)

> **Note:** Never hardcode phone numbers or email addresses inside `.astro` components or page templates.

## 5. How to Add or Edit Services

Services are managed in `src/data/services.ts`.

To update an existing service or add a new service:
1. Open `src/data/services.ts`.
2. Add or update the service object (with `slug`, `title`, `summary`, `description`, `features`, `whatIsIncluded`, `useCases`, and optional `faqs`).
3. The site will automatically build the index card and dynamic page `/services/[slug]`.

## 6. Where to Add Gallery Images

Gallery items are managed in `src/data/gallery.ts`.

1. Place image files under `public/assets/images/gallery/`.
2. Open `src/data/gallery.ts` and add an entry with `id`, `title`, `category`, `image` path, `description`, `location`, and descriptive `alt` text.

## 7. GitHub Pages Settings & Deployment

This project uses official GitHub Actions for automatic deployment.

1. In your GitHub repository settings, navigate to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push changes to `main` or `master` branch, or trigger manually via **Actions > Deploy Gate & Guard Website to GitHub Pages > Run workflow**.

## 8. Custom Domain & DNS Setup (When Domain is Purchased)

When you purchase `gateandguard.co.za`:

1. **Add CNAME file**: Create `public/CNAME` with `gateandguard.co.za`.
2. **Update Astro Config**: In `astro.config.mjs`, update `site: 'https://gateandguard.co.za'` and change `base: '/'`.
3. **DNS Records** (configured in your domain registrar / DNS manager):
  - **Apex Domain (`gateandguard.co.za`)**: Point `A` records to GitHub Pages IP addresses:
    - `185.199.108.153`
    - `185.199.109.153`
    - `185.199.110.153`
    - `185.199.111.153`
  - **Subdomain (`www.gateandguard.co.za`)**: Add a `CNAME` record pointing to `rynomster.github.io`.
