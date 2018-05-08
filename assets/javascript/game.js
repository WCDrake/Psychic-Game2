

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var choose = Math.floor(Math.random() * 26);
var computerChoice = letter[choose];
var win = 0;
var guesses = 9;
var loss = 0;
var guessesSoFar = [];

console.log(computerChoice); 

document.onkeyup = function (event) {
    var userChoice = event.key.toLowerCase();



    if (userChoice === computerChoice) {

        win = win + 1;
        document.getElementById("winCount").innerHTML = "Wins: " + win;
        guesses = 9;
        guessesSoFar = [];
        var newChoice = Math.floor(Math.random() * 26);
        computerChoice = letter[newChoice];

    } else if (guesses < 1) {
        loss = loss + 1;
        document.getElementById("lossCount").innerHTML = "Losses: " + loss;
        guesses = 9;
        guessesSoFar = [];
    }

    else if (userChoice != computerChoice) {
        guesses = guesses - 1;
        guessesSoFar.push(userChoice);
        document.getElementById("guessCount").innerHTML = "Guesses Left: " + guesses;
        document.getElementById("lettersLog").innerHTML = "Your Guesses so far: " + guessesSoFar;


    }
};





