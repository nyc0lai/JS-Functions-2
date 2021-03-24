
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
     } else { 
        console.log('Error!');
     }
};

function getComputerChoice() {

    const number = Math.floor(Math.random()*3);

    switch (number) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }

 }

function determineWinner (userChoice, computerChoice){
    if (userChoice === computerChoice) {
        return 'game was a tie';
    }

    if (userChoice === 'rock') {

    }
}



