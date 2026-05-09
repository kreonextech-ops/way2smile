# Way 2 Smile – Next.js Website

Premium dental clinic website for **Way 2 Smile Multispeciality Dental Clinic** by Dr. Aashish Kumar Jha.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
way2smile/
├── app/
│   ├── layout.tsx           ← Metadata, fonts, SEO
│   ├── page.tsx             ← Assembles all sections
│   └── globals.css          ← CSS variables, global utilities, buttons
│
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── TimingBanner.tsx / .module.css
│   ├── Services.tsx / .module.css
│   ├── Contact.tsx / .module.css
│   └── Footer.tsx / .module.css
│
├── public/
│   └── logo.jpeg            ← Way 2 Smile logo
│
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

---

## 🖼️ Adding Doctor Photo

1. Name the photo **`doctor.jpg`** (or `.png`, `.webp`)
2. Drop it into the **`/public`** folder
3. Open `components/Hero.tsx`
4. Find this comment block inside `.avatar`:
   ```tsx
   {/*
     TO ADD DOCTOR PHOTO:
     Replace the SVG below with:
     <Image src="/doctor.jpg" alt="Dr. Aashish Kumar Jha" fill style={{objectFit:'cover'}} />
     and add import Image from 'next/image' at the top.
   */}
   ```
5. Remove the `<svg>...</svg>` block and uncomment the `<Image>` tag shown in the comment.

---

## 🎨 Brand Colors

All colors are in `app/globals.css` under `:root`:

| Variable         | Value       | Usage                     |
|------------------|-------------|---------------------------|
| `--orange`       | `#F5A623`   | Primary accent            |
| `--orange-light` | `#FDB94B`   | Gradient end / hover      |
| `--orange-pale`  | `#FFF8EC`   | Soft orange backgrounds   |
| `--blue`         | `#29B6F6`   | Secondary accent          |
| `--blue-dark`    | `#0288D1`   | Gradient / icon fill      |
| `--blue-pale`    | `#E8F6FD`   | Soft blue backgrounds     |
| `--text`         | `#1A1A2E`   | Headings / dark sections  |
| `--muted`        | `#6B7280`   | Body text                 |

---

## 📞 Updating Phone Numbers

Search for these strings across the codebase and replace as needed:

| Number          | File(s)                          |
|-----------------|----------------------------------|
| `8949805173`    | `Hero.tsx`, `Contact.tsx`        |
| `917679779255`  | `Navbar.tsx`, `Hero.tsx`, `Contact.tsx`, `OfferBanner` |

---

## 🏗️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (zero external CSS deps)
- **Google Fonts** — Playfair Display + Nunito
- **Glassmorphism** via `backdrop-filter: blur()`

---

*Built by Kreonex Technology for Way 2 Smile Dental Clinic, Sushrutanagar*
