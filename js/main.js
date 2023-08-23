/*----- constants -----*/
//  Audio countdown timer for clock
// Each of the card objects will used twice
const SOURCE_CARDS = [
	{img: 'https://imgur.com/Fw2Xmek.jpg'	,matched: false},
	{img: 'https://imgur.com/8somayG.jpg'	,matched: false},
	{img: 'https://imgur.com/GME3odj.jpg'	,matched: false},
	{img: 'https://imgur.com/7By2XLx.jpg'	, matched: false},
	{img: 'https://imgur.com/rvGcGes.jpg'	, matched: false},
	{img: 'https://imgur.com/0S1Suxa.jpg'	, matched: false}
];

const CARD_BACK = 'https://imgur.com/nhNQQMq.jpg' 


/*----- state variables -----*/
let cards; //Array of 12 shuffled card objects
let firstcardChoice; 

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

// Initialize all state and then call render//

init ();

function init() {
	cards = getShuffledCards();
	firstcardChoice = null;
	render();
}
	function render()	{
		cards.forEach(function(card,idx) {
		const imgEl = document.getElementById(idx);
			imgEl.src = card.img
		});	
	}

function getShuffledCards() {
	let tmpCards = [];
		let cards= [];
	for (let card of SOURCE_CARDS) { 
		tmpCards.push(card, card);
	}
	while (tmpCards.length) {
		let rndIdx = Math.floor(Math.random() * tmpCards.length);
		let card = tmpCards.splice(rndIdx, 1)[0];
	}	cards.push(card);


}







