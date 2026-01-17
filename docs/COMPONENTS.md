# Components Documentation

Dokumentasi untuk setiap React component dalam proyek.

## Component Overview

| Component      | Location                        | Description         |
| -------------- | ------------------------------- | ------------------- |
| Header         | `components/Header.jsx`         | Navigation bar      |
| Hero           | `components/Hero.jsx`           | About/intro section |
| Projects       | `components/Projects.jsx`       | Featured projects   |
| ProjectGallery | `components/ProjectGallery.jsx` | All projects page   |
| ProjectDetail  | `components/ProjectDetail.jsx`  | Single project page |
| Contact        | `components/Contact.jsx`        | Contact section     |
| Footer         | `components/Footer.jsx`         | Site footer         |
| LazyImage      | `components/LazyImage.jsx`      | Lazy loading image  |

---

## Header

**File**: `src/components/Header.jsx`

Navigation component dengan logo, menu links, dan CTA button.

### Features

- Logo dengan link ke home
- Navigation menu: About, Projects, Contact
- Theme toggle (disabled)
- "Hire Me" CTA button
- Smooth scroll untuk Contact section

### State

- `isDark` - Dark mode toggle (default: system preference)

### Dependencies

- `react-router-dom` - Link, useNavigate, useLocation
- `react-icons/lu` - LuTerminal, LuSun, LuMoon

---

## Hero

**File**: `src/components/Hero.jsx`

Hero section menampilkan profile photo dan bio.

### Features

- Profile image dengan lazy loading
- Job title label
- Headline title
- Bio paragraphs
- CTA link ke projects

### Assets

- `assets/images/profile.jpg`

---

## Projects

**File**: `src/components/Projects.jsx`

Menampilkan 3 project terbaru di homepage.

### Features

- Section header dengan label dan title
- Grid 3 kolom untuk project cards
- Link ke halaman all projects

### Data Source

- `data/projects.js` (slice 0-3)

---

## ProjectGallery

**File**: `src/components/ProjectGallery.jsx`

Halaman menampilkan semua project.

### Features

- Back to home navigation
- Grid layout semua project cards
- Scroll to top on mount

### Data Source

- `data/projects.js` (all)

---

## ProjectDetail

**File**: `src/components/ProjectDetail.jsx`

Halaman detail untuk single project.

### Features

- Back button (browser history)
- Project title dan hero image
- Project overview (longDesc)
- Technology tags
- Link to live site

### Route Parameter

- `:id` - Project ID dari URL

### Error Handling

- Menampilkan "Project not found" jika ID tidak valid

---

## Contact

**File**: `src/components/Contact.jsx`

Contact section dengan email dan social links.

### Features

- Section header
- Email address (mailto link)
- Social media icon links

---

## Footer

**File**: `src/components/Footer.jsx`

Site footer dengan copyright dan social links.

### Features

- Copyright text
- Social links: LinkedIn, GitHub, Twitter

---

## LazyImage

**File**: `src/components/LazyImage.jsx`

Reusable component untuk lazy loading images dengan dominant color placeholder.

### Props

| Prop           | Type   | Default    | Description          |
| -------------- | ------ | ---------- | -------------------- |
| `src`          | string | required   | Image source URL     |
| `alt`          | string | `''`       | Alt text             |
| `className`    | string | `''`       | Additional CSS class |
| `aspectRatio`  | string | `'16/10'`  | CSS aspect-ratio     |
| `borderRadius` | string | `'0.5rem'` | Border radius        |

### Features

- Intersection Observer untuk lazy loading
- Dominant color extraction via canvas
- Smooth fade-in transition
- Placeholder dengan warna dominan

### Usage

```jsx
import LazyImage from "./LazyImage";

<LazyImage
  src={imageSrc}
  alt="Description"
  aspectRatio="4/5"
  className="custom-class"
/>;
```
