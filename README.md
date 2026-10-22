# My Blog

En blog, der henter sine indlæg fra et headless CMS. Lavet som projektopgave på webudvikleruddannelsen på Techcollege Aalborg.

## Hvad kan siden

- **Forside:** Det nyeste indlæg vises som et stort featured kort, resten vises i et grid
- **Kategorier:** Filtrér indlæggene efter kategori i menuen
- **Artikelside:** Hvert indlæg har sin egen side med billede, forfatter og dato
- **Opret konto:** Side med formular til at oprette en konto (kun design)
- **Responsivt design:** Tilpasset mobil og tablet med egne SCSS-mixins

## Teknologi

- React og React Router
- TypeScript og JavaScript
- SCSS Modules
- Hygraph (headless CMS)
- GraphQL med graphql-request
- Vite

## Design

Designet er lavet i Figma: [Se Figma-filen](https://www.figma.com/make/ZlMPKsGRnR04NdBRoOWM0D/Blog-site-design?fullscreen=1&t=aJa03SAoViIwkhEp-1&code-node-id=0-9)

## Kør projektet lokalt

Projektet kræver en `.env`-fil med adressen til Hygraph:

```
VITE_PUBLIC_URL=din-hygraph-url
```

```bash
npm install
npm run dev
```

## Lavet af

Oliver Bredmose · [bredmosewebdesign.dk](https://bredmosewebdesign.dk)
