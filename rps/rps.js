var objectt = 0;
var rockk = 0;
var paperr = 0;
var scissorss = 0;
var win = 0;
var lose = 0;

var options = ["rock", "paper", "scissors"];

function playGame(choice) {
    //computers random selection
    var answer = options[Math.floor(Math.random() * 3)];

    // update vs text
    document.getElementById("userVsComputer").innerHTML = choice + " VS " + answer;

    // user selects rock
    if (choice == "rock") {
        if (answer == "rock") {
            document.getElementById("winner").innerHTML = "It's a tie";
        } else if (answer == "paper") {
            document.getElementById("winner").innerHTML = "You lose...";
        } else {
            document.getElementById("winner").innerHTML = "You WIN!";
        }
    } else if (choice == "paper") {
        if (answer == "rock") {
            document.getElementById("winner").innerHTML = "You WIN!";
        } else if (answer == "paper") {
            document.getElementById("winner").innerHTML = "It's a tie";
        } else {
            document.getElementById("winner").innerHTML = "You lose...";
        }
    } else {
        if (answer == "rock") {
            document.getElementById("winner").innerHTML = "You lose...";
        } else if (answer == "paper") {
            document.getElementById("winner").innerHTML = "You WIN!";
        } else {
            document.getElementById("winner").innerHTML = "It's a tie";
        }
    }
}