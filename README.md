# QuipuCash

A lightweight cryptocurrency dashboard that shows crypto market news, a price table, and a price chart in a clean, zero-build interface. Built with plain HTML, CSS, and vanilla JavaScript.

> The UI is in Spanish (the project's original language).

![QuipuCash screenshot](docs/screenshot.png)

## Features

- **News section** ("Noticias") with the latest crypto headlines.
- **Price table** ("Precios") listing cryptocurrencies with USD price and 24h variation.
- **Price chart** ("Gráfico de Precios") rendered with [Chart.js](https://www.chartjs.org/).
- **Zero build step** — just open the file or serve the folder.

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- [Chart.js 4](https://www.chartjs.org/) (loaded from CDN)

## Run Locally

```bash
git clone https://github.com/coderblockch/QuipuCash.git
cd QuipuCash

# Serve it with any static server, e.g. Python:
python3 -m http.server 8000
# then open http://localhost:8000
```

You can also open `index.html` directly in a browser. Serving over HTTP is recommended so the Chart.js CDN script loads reliably.

## Project Structure

```
index.html   # Markup and page structure
style.css    # Styling
quipu.js     # App logic and chart rendering
docs/        # Screenshots used in this README
```

## Data & Configuration

The prices shown are **static demo data** defined in `quipu.js` (`obtenerPrecios`). No API key or secret is required to run the app.

To display live prices, replace the body of `obtenerPrecios()` with a `fetch` call to a public crypto API (for example [CoinGecko](https://www.coingecko.com/en/api)), returning an array of `{ nombre, precio }` objects. If your chosen API requires a key, keep it out of source control (use an environment variable or a config file listed in `.gitignore`) — never hardcode secrets.

## License

[MIT](LICENSE) © coderblockch
