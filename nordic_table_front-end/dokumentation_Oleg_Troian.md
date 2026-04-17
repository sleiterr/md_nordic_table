# Dokumentation – Nordic Table Front-end

## Projektoversigt

Dette projekt er frontend-delen af "Nordic Table" – et moderne bookingsystem til en nordisk restaurant. Applikationen er bygget med React og Tailwind CSS og tilbyder brugervenlig booking, menuvisning og et beskyttet backoffice til administration.

> **Bemærk:** Frontend fungerer sammen med en separat backend, som skal køre lokalt (se opsætning).

---

## Funktionalitet

- Forside med præsentation og menu
- Bookingformular med validering
- Bekræftelsesside efter booking
- Backoffice (admin) med loginbeskyttelse
- 404-side for ukendte ruter
- Toast-notifikationer for fejl/succes

---

## Teknologier og værktøjer

- **React 18+** – komponentbaseret UI
- **Tailwind CSS 4** – utility-first styling
- **Formik & Yup** – formularhåndtering og validering
- **React Router v6+** – routing
- **React Icons, React Toastify, clsx** – UI-ikoner, notifikationer, betingede klasser

---

## Projektstruktur

```
nordic_table_front-end/
├── public/
│   └── favicon/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

**Vigtige mapper:**

- `src/components/` – genanvendelige UI-komponenter (Header, Footer, Cards, Modal, osv.)
- `src/pages/` – sidestruktur (Home, Booking, Menu, Backoffice, Login, NotFound)
- `src/hooks/` – custom hooks
- `src/utils/` – hjælpefunktioner og API-kald
- `public/` – statiske filer, favicon, billeder

---

## Formularer

### Bookingformular

- Felter: Navn, Email, Antal gæster, Dato, Tidspunkt
- Validering: Påkrævede felter, email-format, antal gæster (1-12)
- Data sendes til backend via POST `/booking`
- Ved succes: redirect til bekræftelsesside

### Login (admin)

- Felter: Email, Adgangskode
- Ved succesfuld login: adgang til backoffice

---

## Backend-integration

Frontend kommunikerer med backend via REST API. Backend skal køre lokalt (fx på http://localhost:3042). API-adressen sættes i `.env`:

```
VITE_API_BASE_URL=http://localhost:3042
```

---

## Installation og opsætning

1. **Klon repoet:**
   ```sh
   git clone https://github.com/sleiterr/md_nordic_table
   cd nordic_table-front-end
   ```
2. **Installer afhængigheder:**
   ```sh
   npm install
   ```
3. **Opret .env-fil:**
   ```
   VITE_API_BASE_URL=http://localhost:3042
   ```
4. **Start udviklingsserver:**
   ```sh
   npm run dev
   ```
5. **Åbn i browser:**
   [http://localhost:5173](http://localhost:5173)

---

## Scripts

- `npm run dev` – start udviklingsserver
- `npm run build` – byg til produktion
- `npm run preview` – vis produktion build
- `npm run lint` – kør ESLint

---

## Udvidelse og vedligehold

- Tilføj nye sider i `src/pages/`
- Udvid komponenter i `src/components/`
- Tilføj hooks i `src/hooks/`
- Opdater API-kald i `src/utils/api.js`
- Tilpas tema i `tailwind.config.js` og `src/index.css`

---

## Kvalitetssikring

- Kør `npm run lint` før aflevering
- Test responsivt på mobil og desktop
- Tjek at alle formularer og flows virker

---

## Responsivt design

Projektet er designet "mobile first" og understøtter skærmstørrelser fra **390px** (mobil) op til **1440px** (desktop).

- Layout og komponenter tilpasses automatisk vha. Tailwind CSS breakpoints (`md:`, `lg:`, `xl:` osv.).
- Alt styles er optimeret, så det fungerer på både små og store skærme.
- Eksempel: Alt under `md:` gælder for mobil, og alt over `md:` gælder for tablet/desktop.

**Krav:**

- Brugeren skal have en god oplevelse på både mobil og desktop.
- Tjek at alle sider og formularer fungerer fra 390px til 1440px bredde.

---

## Kontakt

Forfatter: Oleg Troian (MediaCollege, 2026)  
Email: oleg4troian@gmail.com  
Portfolio: [olegtr.netlify.app](https://olegtr.netlify.app/)  
LinkedIn: [linkedin.com/in/oleg-troian-031922250](https://www.linkedin.com/in/oleg-troian-031922250/)  
GitHub: [github.com/sleiterr](https://github.com/sleiterr)

---

## Tak til

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev/)
- [Formik Docs](https://formik.org/docs/overview)
- [React Router Docs](https://reactrouter.com/en/main)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
