// Datos de las criptomonedas.
// Nota: son datos de demostración estáticos. Para usar precios en vivo,
// reemplaza el cuerpo de obtenerPrecios() por una llamada a una API pública
// (por ejemplo CoinGecko) usando fetch().
const obtenerPrecios = () =>
  Promise.resolve([
    { nombre: "Bitcoin", precio: 40000 },
    { nombre: "Ethereum", precio: 3000 },
    { nombre: "Cardano", precio: 2 },
  ]);

const mostrarGraficos = (criptomonedas) => {
  const lienzo = document.querySelector(".grafico");
  if (!lienzo) {
    return;
  }
  const contexto = lienzo.getContext("2d");

  // Configuraciones del gráfico
  const opciones = {
    type: "bar",
    data: {
      labels: criptomonedas.map((criptomoneda) => criptomoneda.nombre),
      datasets: [
        {
          label: "Precio USD",
          data: criptomonedas.map((criptomoneda) => criptomoneda.precio),
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  // Crea un nuevo gráfico
  new Chart(contexto, opciones);
};

// Obtén los datos y muestra el gráfico cuando el DOM esté listo.
document.addEventListener("DOMContentLoaded", () => {
  obtenerPrecios().then((criptomonedas) => mostrarGraficos(criptomonedas));
});
