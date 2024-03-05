const mostrarGraficos = (criptomonedas) => {
    const lienzo = document.querySelector(".grafico");
    const contexto = lienzo.getContext("2d");
  
    // Configuraciones del gráfico
    const opciones = {
      type: "line",
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
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  
    // Crea un nuevo gráfico
    new Chart(contexto, opciones);
  };
  
  // Obtén los datos y muestra el gráfico
  obtenerPrecios().then((criptomonedas) => mostrarGraficos(criptomonedas));
  