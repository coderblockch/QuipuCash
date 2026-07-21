# QuipuCash — Panel de Criptomonedas

Panel web para visualizar información del mercado de criptomonedas: noticias, tabla de precios con variación de 24 h y un gráfico con **Chart.js**. Construido con **HTML, CSS y JavaScript puro (vanilla)**.

🔗 **[Demo en vivo](https://coderblockch.github.io/QuipuCash/)** *(activa GitHub Pages para publicarla)*

<!-- Agrega una captura de pantalla: ![QuipuCash](docs/screenshot.png) -->

## Funcionalidades

- **Noticias:** listado de titulares del sector cripto.
- **Precios:** tabla con el precio en USD y la variación de las últimas 24 h.
- **Gráfico:** visualización de precios con Chart.js sobre un `<canvas>`.

## Stack técnico

- **HTML5** — estructura y contenido.
- **CSS3** — estilos y layout.
- **JavaScript (ES6+)** — lógica y consumo de datos (`async/await`).
- **[Chart.js](https://www.chartjs.org/)** — gráficos.

## Cómo ejecutarlo

No requiere instalación. Opción 1: abre `index.html` directamente. Opción 2 (recomendada):

```bash
git clone https://github.com/coderblockch/QuipuCash.git
cd QuipuCash
python3 -m http.server 8000
```

Luego abre [http://localhost:8000](http://localhost:8000).

## Estructura

```
QuipuCash/
├── index.html   # Estructura del panel (noticias, precios, gráfico)
├── style.css    # Estilos globales
└── quipu.js     # Lógica de datos y renderizado del gráfico
```

## Posibles mejoras

- Conectar los precios a una API real (por ejemplo [CoinGecko](https://www.coingecko.com/es/api)) en lugar de datos fijos.
- Hacer las noticias dinámicas mediante un feed o API.
