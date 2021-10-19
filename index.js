// Create an Array of at least 3 losing messages
var losingMessages = [
    'Aw, shucks!',
    "Don't give up!",
    'Hmm, not quite right'
]

// Create variables to count wins and losses
var wins = 0
var losses = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageEl = document.getElementById('message')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

// target all .box elements and attach a click event listener to each one using a loop
var boxElements = document.querySelectorAll('.box')
for (var i=0; i < boxElements.length; i++) {
    var boxElement = boxElements[i];
    boxElement.onclick = function(event) {
        // within each click event...
        // determine which box was clicked with 'this.textContent' or event.target.textContent
        // convert that value to a Number and store it to a variable
        var boxNumWasClicked = Number(event.target.textContent)

        // create a random number between 1-3 and store it to a variable
       // var winningNum = getRandomArbitrary
        // This number will represent the winning box

        var winningBox = 1 + Math.floor(Math.random()*boxElements.length)

        console.log(winningBox)
        console.log(boxNumWasClicked)
        // determine if the box clicked is equal to the random number
        // if the numbers match, display a winning message by changing the text content of the div#message element
        // if the numbers match, increment wins and display the win count in div#wins
        // if the numbers don't match, change the div#message element's text to a random losing message from the array above
        // if the numbers don't match, increment losses and display the loss count in div#losses
        if (boxNumWasClicked === winningBox) {
            document.getElementById('message').innerHTML = 'Nice job!';
            wins++
            document.getElementById('wins').innerHTML = 'Wins: ' + wins;
        }
        else {
            document.getElementById('message').innerHTML = losingMessages[winningBox];
            losses++
            document.getElementById('losses').innerHTML = 'Losses: ' + losses;
        }

    }
}