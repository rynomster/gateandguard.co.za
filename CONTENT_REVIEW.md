# Gate & Guard Projects - Content & Business Verification Review

This checklist documents unverified business assertions, placeholder contact details, and assets requiring client sign-off before production launch (`gateandguard.co.za`).

---

## 1. Contact Information & Service Territory

- [ ] **Primary Phone Number:** Currently configured as `+27600000000` / `060 000 0000` in `src/data/site.ts`. *Needs client confirmation.*
- [ ] **WhatsApp Number:** Currently configured as `27600000000` in `src/data/site.ts`. *Needs client confirmation.*
- [ ] **Primary Email:** Currently configured as `info@gateandguard.co.za` in `src/data/site.ts`. *Needs client confirmation.*
- [ ] **Service Areas:** Blanket claims of specific suburbs (Sandton, Randburg, Midrand, Centurion, etc.) removed from UI prompts. *Needs client sign-off on confirmed operational radius.*
- [ ] **Physical Address:** Set to "South Africa" without specific suburb/street until verified.

---

## 2. Operating Hours & Service Claims

- [ ] **Business Hours:** Standard hours set to `07:30 - 17:00` (Mon-Fri) and `08:00 - 13:00` (Sat).
- [ ] **Emergency Callouts / SLAs:** Removed unverified 24/7 SLA promises and blanket emergency response claims.
- [ ] **Free Site Inspections:** Replaced absolute "free site inspection" marketing claims with "site evaluation and quote request" phrasing until commercial policy is confirmed.

---

## 3. Compliance & Statutory Assertions

- [ ] **Electric Fence COC Authority:** Clarified that EFSCOC certificates are issued via registered electric fence system installers according to statutory standards.
- [ ] **Electrical COC:** Removed blanket claims offering direct general electrical COCs unless qualified electrical contractor details are verified.

---

## 4. Workmanship Portfolio & Imagery

- [ ] **Completed Projects Gallery:** Replaced claims of specific customer addresses and suburb locations with explicit "Illustrative Solutions" tagging until client supplies real installation photos with client permission.
- [ ] **Client Testimonials / Statistics:** Unverified "500+ projects" and "99% satisfaction" metrics hidden in source data (`src/data/site.ts`).
- [ ] **Team & Equipment Photos:** Stock visuals marked in `src/data/assets.ts` as illustrative.

---

## 5. DIY & Supply Offerings

- [ ] **DIY Kits:** Framed as hardware supply and guided technical advice rather than proprietary pre-packaged brand bundles.

---

*Last Updated: Design Refinement v2 Pass*
