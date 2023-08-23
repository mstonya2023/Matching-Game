/*----- constants -----*/
//  Audio countdown timer for clock``
// Each of the card objects will used twice
const SOURCE_CARDS = [
	{ img: 'imgs/tan.png', matched: false },
	{ img: 'imgs/blue.png', matched: false },
	{ img: 'imgs/green.png', matched: false },
	{ img: 'imgs/orange.png', matched: false },
	{ img: 'imgs/rainbow.png', matched: false },
	{ img: 'imgs/red.png', matched: false },
	
];

const CARD_BACK = 'imgs/black.png';


/*----- state variables -----*/
let cards; //Array of 12 shuffled card objects
let firstcardChoice;

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

// Initialize all state and then call render//

init();

function init() {
	cards = getShuffledCards();
	firstcardChoice = null;
	render();
}
function render() {
	cards.forEach(function (card, idx) {
		const imgEl = document.getElementById(idx);
		const src = (cards.matched || card === firstcardChoice)  ? card.img : CARD_BACK ;
		imgEl.src = src;
	});
}

function getShuffledCards() {
	let tmpCards = [];
	let cards = [];
	for (let card of SOURCE_CARDS) {
		tmpCards.push(card, card);
	}
	while (tmpCards.length) {
		let rndIdx = Math.floor(Math.random() * tmpCards.length);
		let plycard = tmpCards.splice(rndIdx, 1)[0];
		cards.push(plycard);
	}
	return cards;

}







