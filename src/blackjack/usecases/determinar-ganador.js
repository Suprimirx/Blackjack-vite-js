export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos){
            alert('Draw');
        }else if(puntosMinimos <= 21 && puntosComputadora > 21){
            alert('You won');
        }else{
            alert('You lose');
        }
    }, 105); 
}