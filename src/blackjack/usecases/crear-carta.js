
export const crearCarta = (divCartasJugadores, carta, turno) => {
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    // .src para agregar la fuente
    imgCarta.src = `assets/cartas/${carta}.png`;
    // classList.add para agregar la clase
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);  
}