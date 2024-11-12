/**
  * Obtener el valor de carta
  * @param {String} carta 
  * @returns {Number} Valor de la carta
  */
 export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
           ( valor === 'A' ) ? 11 : 10
           : valor * 1;

    // return (!isNaN(carta.substring(0, carta.length - 1))) ? carta.substring(0, carta.length - 1) * 1 : 
    //     (carta.substring(0, carta.length - 1) === 'A') ? 11 : 10;    
    
}

