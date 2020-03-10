// Game values
let min = Math.floor((Math.random() * 10) + 1),
    max = Math.ceil((Math.random() * 10) + 10),
    winningNum = min + Math.round(Math.random() * 5),
    guessesLeft = 3;

console.log(`Winning guess : ${winningNum}`);

// let coolPng = document.createElement('span');
// coolPng.innerHTML = `<img src="./img/cool.png" alt="cool">`;

// let sadPng = document.createElement('span');
// sadPng.innerHTML = `<img src="./img/sad.png" alt="sad">`;

// Ui elements
const inputUi = document.querySelector('#inputGuess'),
    submitBtn = document.querySelector('#submitBtn'),
    errorMsg = document.querySelector('.errorMsg'),
    game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num');

let playAgaainBtn;

// Assign dynamic min and max to ui elements
minNum.textContent = min;
maxNum.textContent = max;

// Add eventListener on submit button 
submitBtn.addEventListener('click', () => {
    // Input validation
    let guess = inputUi.value;
    //console.log(guess);
    if (guess == '') {
        validator('Input can not be blank! Kindly provide input', 'red');
    } else if (guess < min || guess > max) {
        validator(`Input must be in ${min} - ${max} range! Enter valid input`, 'red');
    } else if (guess == winningNum) {
        validator(`Input is correct! You Won`, 'green');
        //console.log(coolPng)
        inputUi.disabled = true;
        playAgainFunction();
    } else if (guessesLeft != 0) {
        validator(`Incorrect input! more guesses left`, 'red');
        //inputUi.disabled = true;
        guessesLeft--;
    } else {
        validator(`You loose ${sadPng}! Better luck next time`, 'red');
        inputUi.disabled = true;
        playAgainFunction();
    }
});

let validator = (msgString, color) => {
    errorMsg.textContent = msgString;
    errorMsg.style.color = color;
    inputUi.style.borderColor = color;
}

let playAgainFunction = () => {
    // Creating playagian button
    playAgaainBtn = document.createElement('button');
    playAgaainBtn.className = 'button button-primary';
    playAgaainBtn.textContent = 'Play again';
    playAgaainBtn.id = 'playAgain';
    playAgaainBtn.setAttribute('type', 'submit');
    playAgaainBtn.style.backgroundColor = '#ffad00';
    playAgaainBtn.style.borderColor = '#ffad00';
    playAgaainBtn.style.color = 'black';
    //  Replacing it with submit
    game.replaceChild(playAgaainBtn, submitBtn);
    // Adding click event on playAgain button to reload the page
    playAgaainBtn.addEventListener('click', () => {
        window.location.reload();
    });
}




// let playAgain = () => {
//     let playAgainBtn = document.querySelector('.playAgain');
//     console.log(playAgainBtn);
//     // playAgainBtn.addEventListener('click', () => {
//     //     window.location.reload();
//     // });
// }