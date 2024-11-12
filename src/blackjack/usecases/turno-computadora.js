import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from "./";

export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntosHTML, divCartasJugadores) => {
    let puntosComputadora = 0;
    do{
        const carta = pedirCarta(deck)
        puntosComputadora = acumularPuntos(puntosJugadores, puntosHTML, carta, puntosJugadores.length - 1);

        crearCarta(divCartasJugadores, carta, puntosJugadores.length - 1);

        if (puntosMinimos > 21){break;}
    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}