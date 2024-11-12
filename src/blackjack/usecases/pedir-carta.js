/**
 * Función permite tomar una carta.
 * @param {Array<String>} deck Es un arreglo de strings
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = (deck) => {
    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}

