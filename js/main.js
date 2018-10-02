
const cards = document.querySelectorAll('.memoryCard');

let thisCardFlipped = false;
let first, second;

function flipCard() {
    //checks if the first card was flipped
    this.classList.add('flip');
    if (!thisCardFlipped) {
        thisCardFlipped = true;
        first = this;
    //checks if the second card is flipped
    } else {
            thisCardFlipped = false;
            second = this; 

        //check if the flipped cards match
        if (first.dataset.name === second.dataset.name) {
            first.removeEventListener('click', flipCard, false);
            second.removeEventListener('click', flipCard, false);
            setTimeout(function invisibleCard() {
            first.style.visibility = 'hidden';
            second.style.visibility = 'hidden';
                       },1000)
         // the card didn't match
        } else {
            setTimeout(function reverseCard() {
            first.classList.remove('flip');
            second.classList.remove('flip')
            }, 1000);
        };
    };
};

for (card of cards) {
    card.addEventListener('click', flipCard, false);
}


