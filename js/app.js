let year = (new Date()).getFullYear();
let yearSpan = document.getElementById("year");
yearSpan.textContent = year;

let topRow = document.getElementById("row-top");
let middleRow = document.getElementById("row-middle");
let bottomRow = document.getElementById("row-bottom");

let resetButton = document.getElementById("resetButton");
let message = document.getElementById("message");

let xScore = document.getElementById("xScore");
let oScore = document.getElementById("oScore");

resetButton.addEventListener("click", resetBoard);

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
	let lT = document.getElementById("left-top").textContent.replace(/\s+/gi, "");
	let lM = document.getElementById("left-middle").textContent.replace(/\s+/gi, "");
	let lB = document.getElementById("left-bottom").textContent.replace(/\s+/gi, "");

	let cT = document.getElementById("center-top").textContent.replace(/\s+/gi, "");
	let cM = document.getElementById("center-middle").textContent.replace(/\s+/gi, "");
	let cB = document.getElementById("center-bottom").textContent.replace(/\s+/gi, "");

	let rT = document.getElementById("right-top").textContent.replace(/\s+/gi, "");
	let rM = document.getElementById("right-middle").textContent.replace(/\s+/gi, "");
	let rB = document.getElementById("right-bottom").textContent.replace(/\s+/gi, "");

	if (lT === "X" && cT === "X" && rT === "X") { // X top row win
		win(turn);
	} else if (lT === "O" && cT === "O" && rT === "O") { // O top row win
		win(turn);
	} else if (lM === "X" && cM === "X" && rM === "X") { // X middle row win
		win(turn);
	} else if (lM === "O" && cM === "O" && rM === "O") { // O middle row win
		win(turn);
	} else if (lB === "X" && cB === "X" && rB === "X") { // X bottom row win
		win(turn);
	} else if (lB === "O" && cB === "O" && rB === "O") { // O bottom row win
		win(turn);
	} else if (lT == "X" && lM === "X" && lB === "X") { // X left column win
		win(turn);
	} else if (lT === "O" && lM === "O" && lB === "O") { // O left column win
		win(turn);
	} else if (cT === "X" && cM === "X" && cB === "X") { // X center column win
		win(turn);
	} else if (cT === "O" && cM === "O" && cB === "O") { // O center column win
		win(turn);
	} else if (rT === "X" && rM === "X" && rB === "X") { // X right column win
		win(turn);
	} else if (rT === "O" && rM === "O" && rB === "O") { // O right column win
		win(turn);
	} else if (lT === "X" && cM === "X" && rB === "X") { // X top left diagonal win
		win(turn);
	} else if (lT === "O" && cM === "O" && rB === "O") { // O top left diagonal win
		win(turn);
	} else if (lB === "X" && cM === "X" && rT === "X") { // X bottom left diagonal win
		win(turn);
	} else if (lB === "O" && cM === "O" && rT === "O") { // O bottom left diagonal win
		win(turn);
	} else {

	}
}

function resetBoard() {
	message.textContent = "";
	for (let i = 0; i < squares.length; i++) {
		squares[i].removeEventListener("click", attempt);
		squares[i].textContent = "";
	}

	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", attempt);
	}

	turn = "X";
}

function win(symbol) {
	console.log(`${symbol}'s wins.`);

	if (turn === "X") {
		xScore.textContent = Number(xScore.textContent) + 1;
	} else {
		oScore.textContent = Number(oScore.textContent) + 1;
	}

	for (let i = 0; i < squares.length; i++) {
		squares[i].removeEventListener("click", attempt);
	}
}