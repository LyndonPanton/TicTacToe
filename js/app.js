let year = (new Date()).getFullYear();
let yearSpan = document.getElementById("year");
yearSpan.textContent = year;

let topRow = document.getElementById("row-top");
let middleRow = document.getElementById("row-middle");
let bottomRow = document.getElementById("row-bottom");

let turn = "X";

let squares = document.getElementsByClassName("square");
for (let i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", attempt);
}

function attempt() {
	console.log(`click!`);
	if (turn === "X") {
		this.textContent = turn;
		check();
		this.removeEventListener("click", attempt);
		turn = "O";
	} else {
		this.textContent = turn;
		check();
		this.removeEventListener("click", attempt);
		turn = "X";
	}
}

function check() {
	let tR = topRow.textContent.replace(/\s+/gi, "");
	let mR = middleRow.textContent.replace(/\s+/gi, "");
	let bR = bottomRow.textContent.replace(/\s+/gi, "");

	console.log(tR);
	console.log(mR);
	console.log(bR);

	if (tR === "XXX" || mR === "XXX" || bR === "XXX") {
		win(turn);
	} else if (tR === "OOO" || mR === "OOO" || bR === "OOO") {
		win(turn);
	} else if (false) {

	} else if (false) {

	} else if (false) {

	} else if (false) {

	} else {

	}
}



function win(symbol) {
	console.log(`${symbol}'s wins.`);
	for (let i = 0; i < squares.length; i++) {
		squares[i].removeEventListener("click", attempt);
	}
}