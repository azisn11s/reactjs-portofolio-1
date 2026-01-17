# Project Structure

Detail struktur file dan folder dalam proyek React portfolio.

## Root Directory

```
portofolio-1/
├── .git/                # Git repository
├── .gitignore           # Git ignore rules
├── dist/                # Production build output
├── docs/                # Documentation
├── node_modules/        # Dependencies
├── public/              # Static assets (tidak diproses)
├── src/                 # Source code
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project manifest
├── package-lock.json    # Dependency lock file
├── README.md            # Project readme
└── vite.config.js       # Vite configuration
```

## Source Directory (`src/`)

```
src/
├── App.jsx              # Root component dengan routing
├── main.jsx             # Application entry point
├── assets/              # Media assets
│   ├── images/          # Image files
│   │   ├── profile.jpg      # Hero section profile photo
│   │   ├── profile-2.jpg    # Alternative profile photo
│   │   ├── project1.jpg     # Project thumbnail
│   │   ├── project2.jpg     # Project thumbnail
│   │   └── project3.jpg     # Project thumbnail
│   └── react.svg        # React logo
├── components/          # React components
│   ├── Contact.jsx      # Contact section
│   ├── Footer.jsx       # Site footer
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero/About section
│   ├── LazyImage.jsx    # Lazy loading image component
│   ├── ProjectDetail.jsx    # Single project page
│   ├── ProjectGallery.jsx   # All projects page
│   └── Projects.jsx     # Projects preview section
├── data/                # Static data
│   └── projects.js      # Project information
└── styles/              # SCSS stylesheets
    ├── _variables.scss  # SCSS variables & mixins
    ├── global.scss      # Global styles
    ├── Contact.scss     # Contact component styles
    ├── Footer.scss      # Footer component styles
    ├── Header.scss      # Header component styles
    ├── Hero.scss        # Hero component styles
    ├── LazyImage.scss   # LazyImage component styles
    └── Projects.scss    # Projects component styles
```

## Configuration Files

### `vite.config.js`

Konfigurasi Vite build tool:

- Plugin React untuk JSX transform
- Base URL untuk GitHub Pages deployment

### `eslint.config.js`

ESLint rules untuk code quality:

- React Hooks rules
- React Refresh support

### `package.json`

Scripts yang tersedia:

- `dev` - Development server
- `build` - Production build
- `lint` - Run ESLint
- `preview` - Preview production build
- `deploy` - Deploy ke GitHub Pages

## Routing Structure

| Path            | Component                        | Description           |
| --------------- | -------------------------------- | --------------------- |
| `/`             | Home (Hero + Projects + Contact) | Landing page          |
| `/projects`     | ProjectGallery                   | All projects list     |
| `/projects/:id` | ProjectDetail                    | Single project detail |

## Data Flow

```
projects.js
    ↓
[Component] ← imports project data
    ↓
Renders with images & content
```

Images di-import sebagai modules melalui Vite untuk optimal bundling.
