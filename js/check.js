class MatchingGame {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.time = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
    }
    startGame(){
        this.cardToCheck = null;
        this.totalTime = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        // setTimeout(() => {
        //     this.shuffleCards();
        //     this.conuntdown = this.startCountdow();
        // }
    }
    flipsCard(card){
        if (this.canFlipCard(card)){
            this.totalClicks++;
            this.tiker.innerText = this.totalClicks;
            card.classList.add('visible');
        }

    }
    shuffleCards(rand){
        for (let i = this.cardsArray.length -1;i > 0 ; i--){
            let randIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
            this.busy = true;
        }

    }
    canFlipCard(card){
        return true;
        // return(!this.busy && ! this.matchedCards.includes(card) && card !== this.cardToCheck);
    }
}
function ready() {
let overlay = Array.from(document.getElementsByClassName('overlay-text'));
let cards = Array.from(document.getElementsByClassName('card'));
let game = new MatchingGame(100, cards);
overlay.forEach(overlay =>{
    overlay.addEventListener('click',() =>{
        overlay.classList.remove('visible')
        game.startGame()

    })
})
    cards.forEach(card =>{
        card.addEventListener('click', () =>{
            game.flipsCard()

        })
    })
}
if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', read());
}else {
    ready();
}