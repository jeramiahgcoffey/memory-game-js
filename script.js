document.addEventListener('DOMContentLoaded', () => {
    
    //card options
    const cardArray = [
        {
            name: 'bulbasaur',
            img: 'img/bulbasaur.png'
        },
        {
            name: 'bulbasaur',
            img: 'img/bulbasaur.png'
        },
        {
            name: 'charmander',
            img: 'img/charmander.png'
        },
        {
            name: 'charmander',
            img: 'img/charmander.png'
        },
        {
            name: 'diglett',
            img: 'img/diglett.jpeg'
        },
        {
            name: 'diglett',
            img: 'img/diglett.jpeg'
        },
        {
            name: 'jigglypuff',
            img: 'img/jigglypuff-u6.jpeg'
        },
        {
            name: 'jigglypuff',
            img: 'img/jigglypuff-u6.jpeg'
        },
        {
            name: 'pidgey',
            img: 'img/pidgey-u7.jpeg'
        },
        {
            name: 'pidgey',
            img: 'img/pidgey-u7.jpeg'
        },
        {
            name: 'pikachu',
            img: 'img/pikachu-u11.jpeg'
        },
        {
            name: 'pikachu',
            img: 'img/pikachu-u11.jpeg'
        },
        {
            name: 'psyduck',
            img: 'img/psyduck.jpeg'
        },
        {
            name: 'psyduck',
            img: 'img/psyduck.jpeg'
        },
        {
            name: 'sandshrew',
            img: 'img/sandshrew-u1.jpeg'
        },
        {
            name: 'sandshrew',
            img: 'img/sandshrew-u1.jpeg'
        },
        {
            name: 'squirtle',
            img: 'img/squirtle.jpeg'
        },
        {
            name: 'squirtle',
            img: 'img/squirtle.jpeg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    
    // create gameboard
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'img/pokeball.jpeg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'img/white.png');
            cards[optionTwoId].setAttribute('src', 'img/white.png');
            cardsWon.push(cardsChosen);
            // Remove click listener after making match
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
        } else {
            cards[optionOneId].setAttribute('src', 'img/pokeball.jpeg')
            cards[optionTwoId].setAttribute('src', 'img/pokeball.jpeg')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'You found all the matches!';
        }
    }

    // flip card
    function flipCard() {
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 300)
        }
    }

    createBoard();
})