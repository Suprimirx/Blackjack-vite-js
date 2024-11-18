import _ from 'underscore';
import html from './app.html?raw';
import { crearDeck, pedirCarta, acumularPuntos, crearCarta, turnoComputadora } from './usecases';

/*
    * 2C = Two of Clubs
    * 2D = Two of Diamonds
    * 2H = Two of Hearts
    * 2S = Two of Spades
*/

export const App = (elementId) => {

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Función para iniciar el juego.
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        // puntosHTML[0].innerText = 0;
        // puntosHTML[1].innerText = 0;
        puntosHTML.forEach(elem => elem.innerText = 0);

        // divCartasJugadores[0].innerHTML = '';
        // divCartasJugadores[1].innerHTML = ''; 
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    (() => {
    
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);

    })();

    // Referencias del HTML.  (#) es para referenciar el ID. (.) Para referenciar la clase.
    const btnPedir = document.querySelector('#btnPedir')
    const btnDetener = document.querySelector('#btnDetener')
    const btnNuevo = document.querySelector('#btnNuevo');
    const divCartasJugadores = document.querySelectorAll('.divCartas');
    const puntosHTML = document.querySelectorAll('small');

    // Listeners
    btnPedir.addEventListener('click', () => {  // Callback: Función como argumento
        const carta = pedirCarta(deck)
        const puntosJugador = acumularPuntos(puntosJugadores, puntosHTML, carta, 0);
        
        crearCarta(divCartasJugadores, carta, 0);

        if(puntosJugador > 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
        } else if( puntosJugador === 21){
            console.warn('21, you won!');
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
        }
    })

    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartasJugadores);
    })

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    })

}