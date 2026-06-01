// Esperamos a que el DOM esté cargado [4]
document.addEventListener('DOMContentLoaded', () => {

    let goles = 0;
    const boton = document.getElementById('botonGol');
    const marcador = document.getElementById('marcador');

    // Evento de clic para el botón de fútbol
    if (boton) {
        boton.addEventListener('click', () => {
            goles++;
            // Modificamos el contenido del HTML en tiempo real
            marcador.innerText = `Goles marcados: ${goles}`;

            // Efecto visual sencillo
            alert("¡¡¡GOOOOOL!!!");
            console.log("Se ha registrado un nuevo gol. Total: " + goles);
        });
    }
});


