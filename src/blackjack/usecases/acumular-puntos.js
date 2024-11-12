import { valorCarta } from "./";

// Turno: [0] = primer jugador y el último será la computadora [puntosJugadores.length - 1].
export const acumularPuntos = (puntosJugadores, puntosHTML, carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}