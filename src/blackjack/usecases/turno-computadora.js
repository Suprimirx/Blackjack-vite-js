import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from "./";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array} deck 
 * @param {Array} puntosJugadores 
 * @param {*} puntosHTML 
 * @param {*} divCartasJugadores 
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntosHTML, divCartasJugadores) => {
    let puntosComputadora = 0;
    const jugadorComputadoraIndex = puntosJugadores.length - 1;
    do{
        const carta = pedirCarta(deck)
        puntosComputadora = acumularPuntos(puntosJugadores, puntosHTML, carta, jugadorComputadoraIndex);

        crearCarta(divCartasJugadores, carta, jugadorComputadoraIndex);

        if (puntosMinimos > 21){break;}
    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}