document.addEventListener('DOMContentLoaded', function() {
    // Selectăm elementele HTML relevante
    const form = document.querySelector('form');
    const playerOneSelect = document.querySelector('.player-one-section');
    const playerTwoSelect = document.querySelector('.player-two-section');
    const resultParagraph = document.querySelector('p');

    // Funcția care determină câștigătorul
    function determineWinner(playerOneChoice, playerTwoChoice) {
        if (playerOneChoice === playerTwoChoice) {
            return "Egalitate!";
        } else if (
            (playerOneChoice === 'piatra' && playerTwoChoice === 'foarfeca') ||
            (playerOneChoice === 'foarfeca' && playerTwoChoice === 'hartie') ||
            (playerOneChoice === 'hartie' && playerTwoChoice === 'piatra')
        ) {
            return "Player 1 a câștigat!";
        } else {
            return "Player 2 a câștigat!";
        }
    }

    // Funcția care va fi apelată atunci când formularul este trimis
    function handleSubmit(event) {
        event.preventDefault(); // Prevenim trimiterea formularului

        // Obținem valorile selectate de fiecare jucător
        const playerOneChoice = playerOneSelect.value;
        const playerTwoChoice = playerTwoSelect.value;

        // Determinăm câștigătorul
        const winner = determineWinner(playerOneChoice, playerTwoChoice);

        // Afisăm rezultatul pe pagina web
        resultParagraph.textContent = winner;
    }

    // Adăugăm un ascultător de evenimente pentru formular
    form.addEventListener('submit', handleSubmit);
});
