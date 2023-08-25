/*----- constants -----*/

const SOURCE_CARDS = [
	{ img: 'imgs/tan.png', matched: false },
	{ img: 'imgs/blue.png', matched: false },
	{ img: 'imgs/green.png', matched: false },
	{ img: 'imgs/orange.png', matched: false },
	{ img: 'imgs/rainbow.png', matched: false },
	{ img: 'imgs/red.png', matched: false },
]

const CARD_BACK = 'imgs/gold.png';
/*----- state variables -----*/
let cards;
let firstcardChoice;
let ignoreClks;
let secondcardChoice;
let gameStatus;

/*----- cached elements  -----*/
const messageEl = document.querySelector('h2');
const buttonEl = document.querySelector('button');

/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handChoice);
buttonEl.addEventListener('click', init);

/*----- functions -----*/

init();
function init() {
	cards = getShuffledCards();
	firstcardChoice = null;
	badNum = 0; //initialize
	ignoreClks = false;
	gameStatus = null;
	buttonEl.style.visibility = 'hidden';
	render();
}
function render() {
	cards.forEach(function (card, idx) {
		const imgEl = document.getElementById(idx);
		const src = (card.matched || card === firstcardChoice || card === secondcardChoice) ? card.img : CARD_BACK;
		imgEl.src = src;
	});
	if (gameStatus === 'win') {
		messageEl.innerHTML = `YOU WIN!`;
		buttonEl.style.visibility = 'visible';

	} else if (gameStatus === 'lose') {
		messageEl.innerHTML = `YOU LOSE! TRY AGAIN! Bad Count: ${badNum}`;
		buttonEl.style.visibility = 'visible';

	} else {
		buttonEl.style.visibility = 'hidden';
		messageEl.innerHTML = `Bad Count: ${badNum}`;
	}
}

function getShuffledCards() {
	let tmpCards = [];
	let cards = [];
	for (let card of SOURCE_CARDS) {
		tmpCards.push({ ...card }, { ...card });
	}
	while (tmpCards.length) {
		let rndIdx = Math.floor(Math.random() * tmpCards.length);
		let plycard = tmpCards.splice(rndIdx, 1)[0];
		cards.push(plycard);
	}
	return cards;

}

function handChoice(evt) {
	const cardIdx = parseInt(evt.target.id);
	if (isNaN(cardIdx) || ignoreClks || gameStatus) return;
	const card = cards[cardIdx];
	if (firstcardChoice) {
		secondcardChoice = card;
		console.log(secondcardChoice);
		if (firstcardChoice.img === card.img) {
			firstcardChoice.matched = secondcardChoice.matched = true;
			firstcardChoice = null;
			secondcardChoice = null;
			if (cards.every(card => card.matched === true)) {
				gameStatus = 'win';
			}
		} else {
			badNum++;
			if (badNum >= 10) {
				gameStatus = 'lose';
			}
			const timeOut = setTimeout(function flipTiles() {
				console.log('hi');
				firstcardChoice = null;
				secondcardChoice = null;
				render();
			}, 600);

		}

	} else {
		firstcardChoice = card;

	}
	render();
}









