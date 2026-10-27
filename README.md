# Celebrare Gallery

A responsive photo gallery built with **React 18, Vite, and Tailwind CSS**. The application fetches photos from the Picsum Photos API and lets users search by author and save their favourite photos.

## Tech Stack

- **React 18** — Functional components and Hooks
- **Vite** — Fast development server and build tool
- **Tailwind CSS** — Utility-first styling
- **Picsum Photos API** — Photo data and image source
- **Browser Local Storage** — Persistent favourites

## Features

| Requirement | Implementation |
|---|---|
| Fetch photos | Custom `useFetchPhotos` hook with loading and error states |
| Responsive gallery | 1 column on mobile, 2 on tablet, and 4 on desktop |
| Author search | Real-time client-side filtering by author name |
| Favourites | `useReducer` with Local Storage persistence |
| Custom hook | `useFetchPhotos` returns `{ photos, loading, error }` |
| Stable callbacks | `useCallback` for search and favourite handlers |
| Memoized filtering | `useMemo` for filtered photo results |
| Prop validation | PropTypes validates props in PhotoCard, SearchBar, and ErrorMessage |

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SyedAhad01/Celebrare-Gallery.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Celebrare-Gallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal, typically `http://localhost:5173`.

### Production Build

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Run the Linter

```bash
npm run lint
```

## Project Structure

```text
src/
├── hooks/
│   ├── useFetchPhotos.js
│   └── favouritesReducer.js
├── components/
│   ├── Gallery.jsx
│   ├── PhotoCard.jsx
│   ├── SearchBar.jsx
│   ├── LoadingSpinner.jsx
│   └── ErrorMessage.jsx
├── App.jsx
├── main.jsx
└── index.css

public/
├── favicon.png
└── celebrare-logo.webp

index.html
package.json
README.md
```

## Key Technical Decisions

### 1. `useReducer` for Favourites

The favourites feature uses `useReducer` to centralize state transitions. The reducer supports `TOGGLE` and `CLEAR` actions, making the state logic easier to maintain and extend.

Favourites are initialized from Local Storage and synchronized when the state changes, allowing saved photos to remain available after a page refresh.

### 2. `useCallback` for Event Handlers

`handleSearchChange` and `handleToggleFavourite` use `useCallback` to preserve function references between renders when their dependencies remain unchanged.

This can help avoid unnecessary child renders when combined with memoized components.

### 3. `useMemo` for Filtering

The `filteredPhotos` result is memoized using `useMemo`. It is recalculated when the photo list, search query, favourites filter, or favourites state changes.

This avoids repeating the filtering calculation on unrelated renders.

### 4. Custom Data-Fetching Hook

The `useFetchPhotos` hook separates API logic from the gallery UI and returns `{ photos, loading, error }`.

It handles:

- Fetching photos from the Picsum Photos API.
- Managing loading and error states.
- Checking HTTP response status and handling network errors.
- Cleaning up the effect to prevent state updates after the effect is cleaned up.

### 5. PropTypes for Runtime Validation

The PhotoCard, SearchBar, and ErrorMessage components use PropTypes to validate their expected props at runtime.

- **PhotoCard:** Validates photo data, favourite status, and the favourite-toggle callback.
- **SearchBar:** Validates the search value, change handler, and photo result counts.
- **ErrorMessage:** Validates that the error message is a required string.

Required props use the isRequired modifier, helping identify missing or incorrectly typed props during development.

### 6. Responsive Design

Tailwind CSS responsive utilities adapt the gallery to different screen sizes:

- **Mobile:** 1 column
- **Tablet:** 2 columns
- **Desktop:** 4 columns

## API

Photos are fetched from the [Picsum Photos API](https://picsum.photos/v2/list?limit=30).

The API provides photo metadata, including author names and image identifiers.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint checks |

## Acknowledgements

- [Picsum Photos](https://picsum.photos/) — Photo data and images
- [React](https://react.dev/) — UI library
- [Vite](https://vite.dev/) — Development and build tooling
- [Tailwind CSS](https://tailwindcss.com/) — Styling framework

---

Built with React, Vite, and Tailwind CSS.
