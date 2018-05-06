

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var choose = Math.floor(Math.random() * 26);
var computerChoice = letter [choose];
var win = 0;
var guesses= 9;
var loss= 0;
var guessesSoFar = [];






console.log (computerChoice);

document.onkeyup = function (event) {
    guessesSoFar.push(letter);
    var letter = event.key.toLowerCase();

     if (letter === computerChoice){

        win= win + 1;
        document.getElementById("winCount").innerHTML = "Wins: " + win;
        guesses= 9;
        guessesSoFar = [];
        
    
        } else if (guesses <1){
            loss= loss + 1;
            document.getElementById("lossCount").innerHTML = "Losses: " + loss;
            guesses= 9;
            guessesSoFar = [];
        }

      else if (letter != computerChoice) {
         guesses= guesses - 1;
        guessesSoFar.push(letter);
         document.getElementById("guessCount").innerHTML = "Guesses: " + guesses;
         document.getElementById("lettersLog").innerHTML = "Letters Guessed: " + guessesSoFar;

    
     }
};
        

/*1) I need a way to fix the guesses so far (commas show up)
  2) I need a way to clear the letter log with a win. and the guess count. 
  3) I need a way for the variable computerChoice to refresh
*/
     


