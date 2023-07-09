// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
let timeEl = document.querySelector('.time');
let secondsLeft = 60;
let gameStart = document.querySelector('#btnStart');

function setTime(){
    let quizTimer =setInterval(function(){
        secondsLeft--;
        timeEl.textContent = 'Seconds Left:' + ' ' + secondsLeft;

        if (secondsLeft ===0){
            clearInterval(quizTimer);
        }
    }, 1000); //setting it to 1000 because it is in milliseconds
}

gameStart.addEventListener('click', setTime);


// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score