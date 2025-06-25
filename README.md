# Electron React SQLite Desktop App

A cross-platform desktop application built with **Electron**, **React**, **TypeScript**, **SQLite**, and **Ant Design**. Supports macOS, Windows, and Linux. This app includes data import/export, geolocation services, theming, multi-language support, and persistent offline storage.

---

## Features

### Application Setup
- Cross-platform build: **macOS**, **Windows**, **Linux**
- Integrated React + Electron + TypeORM + better-sqlite3

### Data Persistence
- Local SQLite DB stored persistently in build path
- Maintains user data even after uninstall

### Location Services
- TomTom Geolocation API integration
- Autocomplete address with lat/lng validation

### Internationalization
- Multi-language support (i18n)
- Timezone-aware datetime storage

### UI/UX
- Ant Design components with custom styles
- Route-based dynamic theming
- Custom title bar (minimize, maximize, close)
- Onboarding tutorial steps on first login

### Data Handling
- Import XLSX → structured model → SQLite
- Export SQLite → XLSX / PDF with custom styles
- Date picker with time selection and locale support

### Miscellaneous
- Runtime environment switching (dev/prod)
- Custom application and installer icons
- Secure iframe embedding

---

## Tech Stack

- **Frontend**: React, TypeScript, Ant Design
- **Backend**: Electron, TypeORM, better-sqlite3
- **Build Tools**: Electron Builder, Vite/CRA (depending on setup)
- **APIs**: TomTom Search API
- **Libraries**: XLSX, jsPDF, i18next, Day.js

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/tmariaelvin/electron-react-sqlite-desktop-app.git

cd electron-react-sqlite-desktop-app

# Install dependencies
npm install

# Start in development mode
npm run dev

# Build for production
npm run build
