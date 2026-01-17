# Styling Guide

Panduan styling menggunakan SCSS dalam proyek React portfolio.

## Overview

- **Preprocessor**: SASS/SCSS
- **Methodology**: BEM (Block Element Modifier)
- **Architecture**: Component-based (1 file per component)
- **Font**: Outfit (Google Fonts)

## File Structure

```
src/styles/
├── _variables.scss      # Variables & mixins (partial)
├── global.scss          # Global styles (imports variables)
├── Header.scss          # Header component
├── Hero.scss            # Hero component
├── Projects.scss        # Projects & Gallery & Detail
├── Contact.scss         # Contact component
├── Footer.scss          # Footer component
└── LazyImage.scss       # LazyImage component
```

---

## Variables (`_variables.scss`)

### Colors

```scss
// Primary
$primary: #28728a;

// Backgrounds
$background-light: #fafaf9;
$background-dark: #25292d;

// Accents
$accent-gray: #ebebe8;

// Text
$text-light: #101719;
$text-dark: #f3f4f6;

// Dark mode specific
$dark-border: #3d444a;
$dark-text-secondary: #9ca3af;
```

### Breakpoints

```scss
$breakpoint-md: 768px; // Tablet
$breakpoint-lg: 1024px; // Desktop
$breakpoint-xl: 1280px; // Large desktop (max-width)
```

### Typography

```scss
$font-family: "Outfit", sans-serif;
```

---

## Mixins

### Theme Mixins

```scss
@mixin theme-light {
  background-color: $background-light;
  color: $text-light;
}

@mixin theme-dark {
  background-color: $background-dark;
  color: $text-dark;
}
```

### Utility Mixins

```scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin paper-border {
  border: 1px solid $accent-gray;

  :global(.dark) & {
    border: 1px solid $dark-border;
  }
}
```

---

## BEM Naming Convention

Format: `.block__element--modifier`

### Examples

```scss
.hero {
  // Block
  &__image {
  } // Element: .hero__image
  &__title {
  } // Element: .hero__title
  &__link {
    // Element: .hero__link
    &--active {
    } // Modifier: .hero__link--active
  }
}
```

### Component Blocks

| Block         | Component | Elements                                                              |
| ------------- | --------- | --------------------------------------------------------------------- |
| `.header`     | Header    | `__container`, `__logo`, `__nav`, `__actions`, `__cta`                |
| `.hero`       | Hero      | `__grid`, `__image`, `__content`, `__title`, `__bio`, `__link`        |
| `.projects`   | Projects  | `__container`, `__header`, `__grid`, `__card`, `__image`, `__content` |
| `.contact`    | Contact   | `__container`, `__header`, `__title`, `__email`, `__socials`          |
| `.footer`     | Footer    | `__container`, `__copyright`, `__links`                               |
| `.lazy-image` | LazyImage | `__placeholder`, `__img`                                              |

---

## Dark Mode

Dark mode diaktifkan dengan class `.dark` pada `<body>`.

### Implementation Pattern

```scss
.component {
  background: white;
  color: black;

  :global(.dark) & {
    background: #1e1e1e;
    color: white;
  }
}
```

### Toggle Theme (JavaScript)

```javascript
document.body.classList.toggle("dark");
```

---

## Responsive Design

Mobile-first approach dengan media queries:

```scss
.element {
  // Mobile styles (default)
  padding: 1rem;

  @media (min-width: $breakpoint-md) {
    // Tablet+
    padding: 2rem;
  }

  @media (min-width: $breakpoint-lg) {
    // Desktop+
    padding: 3rem;
  }
}
```

### Grid Patterns

```scss
// 1 column → 2 columns → 3 columns
.grid {
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $breakpoint-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Global Styles

### Reset

```scss
* {
  box-sizing: border-box;
  font-family: "Outfit", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
  transition: 0.3s;
}
```

### Layout Container

```scss
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
```

---

## Best Practices

1. **Import variables** di setiap file SCSS:

   ```scss
   @use "variables" as *;
   ```

2. **Component scoping** - Semua selector dalam namespace block

3. **Avoid nesting > 3 levels** untuk readability

4. **Use variables** untuk colors dan breakpoints

5. **Responsive images** dengan aspect-ratio:
   ```scss
   .image {
     width: 100%;
     aspect-ratio: 16/10;
     object-fit: cover;
   }
   ```
