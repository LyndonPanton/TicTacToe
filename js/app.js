let year = (new Date()).getFullYear();
let yearSpan = document.getElementById("year");
yearSpan.textContent = year;

let turn = "X";

let squares = document.getElementsByClassName("square");
for (let i = 0; i < squares.length; i++) {
	// squares[i].addEventListener("click", function() {
	// 	console.log(`${i + 1} click!`);
	// 	if (turn === "X") {
	// 		squares[i].textContent = turn;
	// 		turn = "O";
	// 	} else {
	// 		squares[i].textContent = turn;
	// 		turn = "X";
	// 	}
	// });
	squares[i].addEventListener("click", attempt);
}

function attempt() {
	console.log(`click!`);
	if (turn === "X") {
		this.textContent = turn;
		turn = "O";
	} else {
		this.textContent = turn;
		turn = "X";
	}
}

function win() {

}