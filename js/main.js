	/*----- constants -----*/
//  Audio countdown timer for clock

	/*----- state variables -----*/
    let board; //insert card template/work with grid/flex for board appearance
	let boardAnimation; //--initiate click function to flip cards//chosen card disappears//cards intro shuffling(bonus)
	let timer; //countown clock for player to win against// Set Interval function(update the Dom here) 
	let scores; // track matches within a set time/ keep records of wins (nest in an object)
	let winner; // computer wins if player can't match all within time/iniate play again function 




	/*----- cached elements  -----*/


	/*----- event listeners -----*/


	/*----- functions -----*/


	init(); // Initiate all state and call render//

	function init() {

board = {
insertCard: //'insert card template'
boardLayout: //'board graphics and design'

};

boardAnimation = {
clkCard: //'choose card by flipping over',
cardRemove: //'card disappears after click'	
};

timer; //60 seconds/have to get correct format


scores = {
trkMatches: 0,
recWins: 0,

};
winner;
	