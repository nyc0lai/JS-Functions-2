const userInput = prompt("Enter a choice Rock, Paper or Scissors:");

const getUserChoice = userInput => {

    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
     } else { 
        console.log('Choose only between Rock, Paper or Scissors');
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
        console.log(`Both players selected ${userChoice}. It's a tie!`);
    } else {

            if (userChoice === 'rock') {

                if (computerChoice === 'paper') {

                console.log('Paper covers rock! Computer win!');

                } else {console.log('Rock smashes scissors! You win!');}
            } 

            if (userChoice ==='paper') {

                if (computerChoice === 'scissors') {

                console.log('Scissors cuts paper! Computer win!');
            
                } else {console.log('Paper covers rock! You win!');}
            } 

            if (userChoice === 'scissors') {

                if (computerChoice === 'rock') {

                console.log('Rock smashes scissors! Computer win!');
            
                } else {console.log('Scissors cuts paper! You win!');}
            } 
            }
 }

function playGame () {
    userChoice = getUserChoice(userInput);
    computerChoice = getComputerChoice();
    determineWinner (userChoice, computerChoice);
    
}

playGame();

console.log(`You\`re shose: ${userInput}`);
console.log(`Computer shose: ${computerChoice}`);
