# Pasha Barbershop

Independent website demo for Pasha Barbershop in Plano, Texas. The approved design uses a large gold name, a gold booking band, and an arched location panel.

- Address: 6921 Independence Pkwy, Suite 180, Plano, TX 75023
- Phone: (214) 501-3715
- Appointments, current hours, and reviews: [Booksy](https://booksy.com/en-us/1061273_pasha-barbershop_barber-shop_36433_plano)

Service prices were checked against Booksy on October 1, 2026. Final prices and availability come from Booksy. The site remains an independent demo until the shop adopts it.

## Development

Requires Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

Edit `index.html` and `src/`. Fonts are served locally from `public/fonts/`, with their OFL licenses included. Design decisions and tokens are documented in `DESIGN.md`; approved mockups are in `.impeccable/mocks/`.

## Production

```bash
npm run build
npm start
```

Vite generates `dist/` from source. Generated output is ignored by Git. Railway builds with `npm run build`; the production server respects Railway's `PORT` environment variable and otherwise uses port 3000.
