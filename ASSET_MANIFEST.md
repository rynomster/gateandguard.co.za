# Gate & Guard Projects - Image & Asset Manifest

This document records the central image registry, visual provenance, optimization parameters, loading strategy, and missing asset checklist for Gate & Guard Projects static site (`DESIGN.md` v2 / `ASSET_BRIEF.md`).

---

## 1. Brand Identity Assets

| Asset ID | File Path | Provenance | Approval Status | Usage & Notes |
| --- | --- | --- | --- | --- |
| `logo-horizontal-webp` | `public/assets/brand/logo-horizontal.webp` | Client | Approved | Primary desktop header logo |
| `logo-horizontal-png` | `public/assets/brand/logo-horizontal.png` | Client | Approved | PNG fallback for header logo |
| `logo-stacked-webp` | `public/assets/brand/logo-stacked.webp` | Client | Approved | Section endcaps / social media |
| `logo-stacked-png` | `public/assets/brand/logo-stacked.png` | Client | Approved | PNG fallback for stacked logo |
| `logo-mark-webp` | `public/assets/brand/logo-mark.webp` | Client | Approved | Shield mark emblem WebP |
| `logo-mark-png` | `public/assets/brand/logo-mark.png` | Client | Approved | Shield mark emblem PNG |
| `favicon` | `public/favicon.png` | Client | Approved | Site favicon badge derived from shield mark |

---

## 2. Hero Visual Assets

| Asset ID | Path | Role | Provenance | Loading Strategy | Status |
| --- | --- | --- | --- | --- | --- |
| `hero-bg` | `/assets/images/hero/hero-bg.jpg` | Homepage Hero Visual | Stock (Licensed) | **Eager Load** (`fetchpriority="high"`) | Illustrative Only |

---

## 3. Service Category Images

| Asset ID | Path | Service | Provenance | Aspect Ratio | Status |
| --- | --- | --- | --- | --- | --- |
| `service-gate-automation` | `/assets/images/services/gate-garage-automation.jpg` | Gate & Garage Automation | Stock | 4:3 | Illustrative Only |
| `service-electric-fencing` | `/assets/images/services/electric-fencing.jpg` | Electric Fencing | Stock | 4:3 | Illustrative Only |
| `service-cctv` | `/assets/images/services/cctv-installation.jpg` | CCTV Surveillance | Stock | 4:3 | Illustrative Only |
| `service-intruder-alarms` | `/assets/images/services/intruder-alarms.jpg` | Intruder Alarms | Stock | 4:3 | Illustrative Only |
| `service-access-control` | `/assets/images/services/access-control.jpg` | Access Control | Stock | 4:3 | Illustrative Only |
| `service-intercoms` | `/assets/images/services/intercoms.jpg` | Intercom Systems | Stock | 4:3 | Illustrative Only |
| `service-diy-projects` | `/assets/images/services/diy-projects.jpg` | DIY Security Supply | Stock | 4:3 | Illustrative Only |

---

## 4. Workmanship & Portfolio Visuals

| Asset ID | Path | Category | Provenance | Status |
| --- | --- | --- | --- | --- |
| `gallery-gate-motor` | `/assets/images/gallery/gate-motor-1.jpg` | Gate Automation | Stock | Illustrative Only |
| `gallery-electric-fence` | `/assets/images/gallery/electric-fence-1.jpg` | Electric Fencing | Stock | Illustrative Only |
| `gallery-cctv` | `/assets/images/gallery/cctv-1.jpg` | CCTV Surveillance | Stock | Illustrative Only |
| `gallery-alarm` | `/assets/images/gallery/alarm-1.jpg` | Intruder Alarms | Stock | Illustrative Only |
| `gallery-access` | `/assets/images/gallery/access-1.jpg` | Access Control | Stock | Illustrative Only |
| `gallery-intercom` | `/assets/images/gallery/intercom-1.jpg` | Intercom Systems | Stock | Illustrative Only |

---

## 5. Client Photo Action Checklist (Requested Real Assets)

To upgrade the site from illustrative visuals to authentic proof, the client should provide 6–12 high-resolution real installation photographs covering:

- [ ] **Gate Automation:** 2x close-up photos of neatly mounted Centurion or ET Nice sliding/swing gate motors showing clean wiring and rack alignment.
- [ ] **Electric Fencing:** 2x photos of neat 8-strand wall-top or free-standing electric fence installations with visible energizer and earth spikes.
- [ ] **CCTV Installations:** 2x photos of installed turret or bullet cameras mounted under eaves overlooking residential or commercial entrances.
- [ ] **Access Control & Intercoms:** 2x photos of mounted video intercom gate stations or keypad access units on plastered/stone pillars.
- [ ] **Team / Vehicles (Optional):** Branded company vehicle or technician at work (with client/property consent).
