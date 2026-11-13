# 🪙 QuipuCash

A Spanish-language page for cryptocurrency news and prices, built with semantic HTML, CSS, and JavaScript. It was one of my first front-end projects: the goal was to practice page structure, tables, styling, and drawing a chart with Chart.js.

🔗 **[Live Demo](https://coderblockch.github.io/QuipuCash/)**

![QuipuCash screenshot](docs/screenshot.png)

## Features

- Header, main content, and footer laid out with semantic HTML (`header`, `main`, `section`, `footer`)
- **News** section with a list of crypto headlines
- **Prices** table for Bitcoin, Ethereum, and Cardano with price (USD) and 24h change
- **Price chart**: an interactive Chart.js bar chart of the same prices, drawn from `quipu.js`
- Simple, readable styling with a dark header and footer

> **Note:** The headlines and prices are sample data (in the HTML and in `quipu.js`). They are not fetched from an API.

## Tech Stack

- HTML5
- CSS3
- JavaScript (`quipu.js`)
- [Chart.js](https://www.chartjs.org/) 4 (loaded from a CDN)

## Run Locally

No build step or dependencies. Open `index.html` in your browser, or serve the folder:

```bash
git clone https://github.com/coderblockch/QuipuCash.git
cd QuipuCash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Project Structure

```
QuipuCash/
├── index.html   # page markup: news list, prices table, and chart canvas
├── style.css    # styles
├── quipu.js     # builds the Chart.js price chart
└── docs/
    └── screenshot.png
```

## Roadmap

- [ ] Load live prices from a public crypto API (e.g. CoinGecko) instead of sample data
- [x] Price chart with Chart.js
- [ ] Make the news links point to real articles

For a finished, API-driven version of this idea, see my **[Crypto Dashboard](https://github.com/coderblockch/crypto-dashboard)**.

## Author

**David Jimenez**, Sacramento, CA · [GitHub @coderblockch](https://github.com/coderblockch) · [Portfolio](https://portfolio-bay-nine-59.vercel.app)
