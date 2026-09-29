# Civic Intelligence Hub

# InViGiL / AP Media — Landing Page Brief

Handoff doc for frontend engineer and web designer.

---

## Product Overview

| Item | Detail |

|------|--------|

| **Mobile app name** | **InViGiL** |

| **Platform name** | **AP Media** |

| **Tagline** | *Intelligence Beyond Vision* |

| **Domain** | `invigilapp.com` |

| **One-liner** | AI-powered civic media platform combining verified journalism, citizen reporting, investigations, and AI-assisted content creation |

| **Suggested naming on page** | **InViGiL by AP Media** or **AP Media — powered by InViGiL & ViERA** |

### Positioning statements (existing copy)

- **Hero option A:** *Intelligence Beyond Vision*

- **Hero option B:** *The World's First Virtual Intelligence Platform*

- **Hero option C:** *Verified News. Real Investigations. AI-Powered Media.*

- **Subhead:** *Experience verified information, advanced investigations, and intelligent media.*

- **Badge:** *POWERED BY ViERA*

- **Meta title (web):** *AP Media — Verified News Platform*

### What problem it solves

1. **Misinformation** → editorial workflows, trust scoring, AI verification

2. **Opaque investigations** → structured INVIGIL with escrow funding, evidence, professional teams

3. **Fragmented media** → news, social, video, live TV, publishing, AI tools in one ecosystem

---

## Target Audiences

| Audience | What they do on the platform |

|----------|------------------------------|

| **Citizens** | Consume news, social content, teasers, live TV; submit stories & investigations |

| **Reporters & volunteers** | Submit news, breaking stories, social posts |

| **Publishers** | Upload e-papers, magazines, books; manage catalogue & orders |

| **Professionals** | Register as investigators, security/surveillance professionals |

| **Investigation clients** | Fund and track formal investigations via INVIGIL |

| **Investigation officers & agents** | Manage cases, tasks, evidence, secure chat |

| **Editors & admins** | Editorial approval, moderation, platform operations |

| **Advertisers & sponsors** | Ads panel, release orders, sponsorships |

---

## Feature List (by module)

### Core navigation (mobile — 5 tabs)

**Home · INVIGIL · ViERA · Teasers · Hub**

---

### 1. Home & News

- Personalized / breaking news feed

- Editorial news with approval workflow (Reporter → Editor)

- Breaking news with priority treatment

- Posters strip (story-style moments from journalists/creators)

- Hub shortcuts to other modules

- Explore & search (topics, people, stories)

**News types:** Hard News, Eyewitness, Report, Analysis, Opinion, Editorial

---

### 2. Social

- Community posts from citizens

- Engagement: like, comment, share, save

- Published immediately (no editorial gate)

---

### 3. Teasers

- Short-form vertical video

- Upload, trim, HLS streaming pipeline

- Citizen-created content

---

### 4. INVIGIL (Investigations)

**Tagline angle:** *Verified Professionals · Serve · Earn · Secure*

**Investigation categories:**

- Personal Security

- Home / Property Surveillance

- Corporate Investigation

- Cyber / Digital Investigation

- Asset Verification

- Background / Due Diligence

- Field Verification

- Other

**Flow:**

```

Client creates case → Funds wallet (Razorpay) → Submits

        ↓

Admin assigns Investigation Officer (IO)

        ↓

IO workspace → Assigns agents → Tasks / evidence / secure chat

        ↓

Agent executes tasks, submits evidence & expenses

```

**Workspace roles:** Client · Investigation Officer · Agent · Specialist

**Key capabilities:**

- Case intake & tracking

- Escrow-funded investigations (₹1,500–₹5,000+ indicative)

- Encrypted evidence handling

- Investigation wallet (allocations & expenses)

- Secure MUChat between parties

---

### 5. ViERA (AI Hub)

**Sub-brand badge:** *POWERED BY ViERA*

| Capability | Description |

|------------|-------------|

| **ViERA Chat** | AI conversational assistant |

| **AI Newsroom** | Automated broadcast generation |

| **AI Verification Check** | Deepfake / media authenticity detection |

| **AI Global Translation** | Multi-language content translation |

| **Anchor Studio** | Virtual news presenters (coming soon) |

| **Spatial AR** | Evidence placement in AR (prototype / hidden) |

---

### 6. Newsstand (Hub)

| Content type | Action |

|--------------|--------|

| E-Paper | Read |

| Magazine | Read |

| Book | Read |

| Documentary | Watch |

| Postcard | View |

- Per-issue purchase or subscription

- My Library for purchased/unlocked content

- Premium members get exclusive content access

---

### 7. Live TV

- Curated external channel directory (YouTube / HLS)

- Go Live capability (AWS IVS on mobile)

- User-managed channels

---

### 8. Publisher Console

- Organization profile

- Upload editions (e-papers, publications)

- Manage catalogue & release orders

---

### 9. Communication

- **MUChat** — 1:1 messaging (text, images, voice notes)

- **Calls** — Voice/video via Agora

- Push notifications (FCM) + in-app

---

### 10. Wallet & Payments

- Razorpay deposits

- Premium membership upgrades

- Investigation funding & escrow

- Ledger accounting

---

### 11. Registration

| Flow | Who |

|------|-----|

| Individual | Citizens |

| Entity | Organizations |

| Publisher | Media orgs |

| Professional | Investigators, security professionals |

- Firebase phone OTP auth

- Verification badges

- Trust score & credibility tiers (A+ to F)

---

### 12. Foundation

- Causes & donations

- Sponsorships

- Community impact initiatives

---

### 13. Ads & Monetization

- Advertising panel

- Ads manager

- Release Order (RO) booking

- Sponsorship of stories/creators

- Coupon campaigns

---

### 14. Buy & Sell

- Classifieds marketplace

---

### 15. Trust & Safety

- Trust score (0–100)

- Credibility tiers: A+ through F

- Verification badges

- Fact scores

- Encrypted investigation evidence

---

## User Roles & Permissions

```

Guest → CITIZEN → REPORTER / VOLUNTEER / PUBLISHER → EDITOR → ADMIN

```

- Self-registration creates **Citizen**

- Reporter / Publisher: apply → admin approval

- Editor / Admin: elevated by admin

- **Membership (Free / Premium)** is separate from roles — unlocks content, not permissions

---

## Pricing

### Consumer membership

| Tier | Price | Benefits |

|------|-------|----------|

| **Free** | ₹0 | Default on registration |

| **Basic+** | ₹199/mo | Ad-light feed, save vault |

| **Premium** | ₹499/mo | AI View, priority investigations |

| **Enterprise** | ₹2,999/mo | Team seats, ads panel |

> Premium consumer subscription marked **"coming soon"** in mobile release builds.

### Professional registration

| Tier | Price |

|------|-------|

| Regular | Free |

| Premium (actual) | ₹20,000/year |

| Premium (inaugural) | ₹2,000/year |

### Entity registration

- Government entities: Free

- Private/commercial: Admin-configurable fee

- NGO/Trust/Society: Configurable fee

### Investigations

- Client deposits via Razorpay → Client Global Wallet

- Cases funded via escrow (₹1,500–₹5,000+ depending on category)

---

## Platform Support

| Platform | Status |

|----------|--------|

| **Android** | ✅ Primary (`com.apmedia.invigil`) |

| **iOS** | ✅ Primary (`com.apmedia.invigil`, iOS 15+) |

| **Web (responsive)** | ✅ Next.js at `invigilapp.com` |

| **Admin panel** | ✅ Separate Firebase-hosted panel |

| Smart TV | ❌ Phase 2 |

| Desktop native | ❌ Not planned |

**CTAs:** Download App (iOS/Android) · Try Web Demo · Register / Login

---

## Brand & Design System

### Visual identity

| Element | Value |

|---------|--------|

| **Wordmark** | InViGiL (gradient violet → cyan) |

| **Platform** | AP MEDIA |

| **Tagline** | Intelligence Beyond Vision |

| **ViERA** | Separate sub-brand icon + "POWERED BY ViERA" badge |

| **Teasers** | Separate sub-brand icon |

### Colors (dark-first)

| Token | Hex | Usage |

|-------|-----|--------|

| Background | `#020617` | Page bg |

| Card | `#0F172A` | Cards |

| Border | `#1E293B` | Borders |

| Violet (primary) | `#7C3AED` | Primary accent |

| Cyan (secondary) | `#22D3EE` | Secondary accent |

| Blue | `#3B82F6` | Links/actions |

| Breaking red | — | Urgent/breaking news |

**Gradients:** Violet (`#A78BFA`) → Cyan (`#22D3EE`) for wordmarks

### Typography

- **Wordmark:** Poppins Bold (700), wide letter-spacing

- **Titles/taglines:** Space Grotesk

- **Web:** Geist Sans + Geist Mono

### UI tone

- Dark cinematic UI, high-contrast white text

- Uppercase tracking on CTAs: `GET STARTED`, `LOGIN`, `REGISTER`

- Rounded cards (14–24px radius)

- Subtle violet glow shadows

- Breaking news uses red accent

### Brand assets (in repo)

| Asset | Path |

|-------|------|

| Logo | `apps/mobile/assets/brand/invigil-logo.png` |

| Banner | `apps/mobile/assets/brand/invigil-banner.png` |

| Splash background | `apps/mobile/assets/brand/splash-bg.jpg` |

| Welcome video | `apps/mobile/assets/brand/invigil-welcome.mp4` |

| ViERA icon | `apps/mobile/assets/brand/viera-icon.png` |

| Teaser icon | `apps/mobile/assets/brand/teaser-icon.png` |

---

## Suggested Page Sections

### 1. Hero

- Headline (pick from positioning statements above)

- Subhead + ViERA badge

- CTAs: Download App · Try Web · Register

- Optional: welcome video or splash background

### 2. Problem → Solution

- Misinformation → verified journalism + trust scoring + AI verification

- Opaque investigations → INVIGIL with escrow, evidence, professional teams

### 3. Feature pillars (4 cards)

1. **Verified Journalism** — editorial approval, breaking news, trust tiers

2. **INVIGIL Investigations** — fund, track, encrypted evidence, IO/agent workspace

3. **ViERA AI** — chat, newsroom, deepfake check, translation, AI anchor

4. **Digital Publishing** — e-papers, magazines, documentaries, live TV, teasers

### 4. For whom (audience tabs)

Citizens · Reporters · Publishers · Professionals · Advertisers

### 5. How INVIGIL works (flow diagram)

Client → Fund → Admin assigns IO → IO deploys agents → Evidence & resolution

### 6. Trust & safety

Trust score, credibility tiers A+–F, verification badges, encrypted evidence

### 7. Pricing

Free tier + Premium plans + Professional registration + Investigation escrow

### 8. Tech credibility (optional footer strip)

Flutter · FastAPI · Firebase · Razorpay · Gemini AI

### 9. Footer

About · Privacy · Terms · Contact · App Store / Play Store badges · `invigilapp.com`

---

## Production vs Coming Soon

**Live now:** Home, Social, INVIGIL, ViERA (chat/verification/translation/newsroom), Teasers, Newsstand, Live TV, Documentaries, Magazines, Postcards, Publisher, Foundation, Ads, Buy & Sell, Registration, Chat, Explore

**Coming soon:** Premium subscription UI, AI Anchor, Marketplace, Jobs, Books library, Matrimonials, Organizations, Spatial AR

**Phase 2+:** Smart TV, marketplace expansion

---

## Key Value Props (for copy)

1. **Verified, trustworthy information** — editorial control + trust/credibility scoring

2. **Citizen-powered investigations** — structured INVIGIL with evidence, escrow, professional teams

3. **AI-powered media creation** — ViERA chat, newsroom, deepfake verification, translation

4. **All-in-one media ecosystem** — news, social, video, live TV, digital publishing in one app

5. **Secure payments & transparency** — Razorpay wallet, investigation escrow, ledger accounting

---

## Reference Files (for designers/engineers)

| Resource | Path |

|----------|------|

| Project vision | `docs/01_PROJECT_OVERVIEW.md` |

| RBAC flows | `docs/00_FLOW.md` |

| Brand constants | `apps/mobile/lib/core/theme/brand_assets.dart` |

| Color tokens | `apps/mobile/lib/core/theme/theme.dart` |

| Feature catalog | `apps/mobile/lib/core/config/app_feature.dart` |

| Web splash copy | `apps/web/src/app/splash/page.tsx` |

| Web metadata | `apps/web/src/app/layout.tsx` |

| Membership pricing | `docs/MEMBERSHIP_PAYMENT_RAZORPAY.md` |

---

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vigil-civic-media.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/039d9060-3cf3-4d22-92dc-278f687359a1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
