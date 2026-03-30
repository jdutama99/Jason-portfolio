# Jason Utama — Portfolio

Personal portfolio site for Jason Utama, a Frontend Engineer based in Atlanta, GA. Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion. Inspired by [brittanychiang.com](https://brittanychiang.com/).

## Features

- **Split-screen layout** — sticky left panel with name, title, and navigation; scrollable right content area
- **Cursor spotlight** — radial gradient that follows the mouse on desktop
- **Animated nav indicators** — expanding line + uppercase tracking with active section detection
- **Experience cards** — hover-to-highlight cards with skill tags and arrow animations
- **Dynamic résumé link** — redirects via `/api/resume` using an env variable (swap without redeploying)
- **Contact form** — powered by Resend email API with React Hook Form
- **Responsive** — mobile hamburger menu with Framer Motion transitions

## Tech Stack

| Technology                                                                               | Purpose                        |
| ---------------------------------------------------------------------------------------- | ------------------------------ |
| [Next.js 14](https://nextjs.org/)                                                        | App Router, SSR, API routes    |
| [React 18](https://react.dev/)                                                           | Component UI                   |
| [Tailwind CSS 3](https://tailwindcss.com/)                                               | Utility-first styling          |
| [Framer Motion](https://www.framer.com/motion/)                                          | Scroll animations, transitions |
| [React Hook Form](https://react-hook-form.com/)                                          | Form state management          |
| [Resend](https://resend.com/)                                                            | Transactional email            |
| [React Email](https://react.email/)                                                      | Email templates                |
| [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer) | Section visibility tracking    |
| [HeroIcons](https://heroicons.com/)                                                      | SVG icons                      |
| [React Icons](https://react-icons.github.io/react-icons/)                                | Social media icons             |

## Color Palette

| Token       | Hex       | Role                          |
| ----------- | --------- | ----------------------------- |
| `primary`   | `#003049` | Background (dark navy)        |
| `secondary` | `#FDF0D5` | Headings, emphasis (cream)    |
| `muted`     | `#669BBC` | Body text (steel blue)        |
| `accent`    | `#C1121F` | CTAs, tags, highlights (red)  |
| `deep`      | `#780000` | Accent hover/pressed (maroon) |
| `card`      | `#0A3D5C` | Elevated surfaces             |
| `dim`       | `#4D7A94` | Timestamps, borders           |

## Project Structure

```
app/
├── layout.js          # Root layout — split-screen, Spotlight, Toaster
├── page.js            # Section composition
├── globals.css        # Tailwind directives, card hover effects
└── api/
    ├── send/route.js  # Contact form email endpoint
    └── resume/route.js # Dynamic résumé redirect
components/
├── common/            # Button, SectionHeading, Spotlight, SubmitBtn
├── NavBar/            # Navbar, NavLink, NavMenu, SocialLinks, Logo
├── section/           # AboutSection, ExperienceSection, SkillSection, FooterSection
│   └── Contact/       # ContactSection, ContactForm
└── Tab/               # TabButton, TabData
context/               # ActiveSectionContext (React Context)
lib/
├── actions/           # Server actions (sendEmail)
├── data/              # Static content (experiences, skills, links, socialLinks)
├── email/             # React Email templates
├── hooks/             # useSectionInView
└── utils/             # Validation helpers
```

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Add RESEND_API_KEY, TO_EMAIL, and RESUME_URL

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable         | Description                                |
| ---------------- | ------------------------------------------ |
| `RESEND_API_KEY` | API key from [Resend](https://resend.com/) |
| `TO_EMAIL`       | Email address for contact form submissions |
| `RESUME_URL`     | URL to résumé (Google Doc, PDF link, etc.) |

## Deployment

Deploy on [Vercel](https://vercel.com/). Add environment variables in the Vercel dashboard.

```bash
npm run build
```
