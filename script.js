// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
let timeEl = document.querySelector('.time');
let secondsLeft = 60;
let gameStart = document.querySelector('#btnStart');
let btnBack = document.querySelector('.btnback');
let btnClear = document.querySelector('.clear');
let btnSubmit = document.querySelector('.btnsubmit');
let gameTitle = document.querySelector('.game-title');
let gameInProgess = document.querySelector('.container');
let highScoreScreen = document.querySelector('#high-score');
let userScore = document.querySelector('#score');
let initials = document.querySelector('#initials');

let questionSequence = 0;
let score = 0;
let questionEl = document.querySelector('#question');
let answerAEl = document.querySelector('#answerA');
let answerBEl = document.querySelector('#answerB');
let answerCEl = document.querySelector('#answerC');
let answerDEl = document.querySelector('#answerD');
let guess = document.querySelector('#guess');

function setTime(){
    let quizTimer =setInterval(function(){
        gameTitle.style.display = 'none';
        gameInProgess.hidden = false;
        secondsLeft--;
        timeEl.textContent = 'Seconds Left:' + ' ' + secondsLeft;

        if (secondsLeft ===0){
            clearInterval(quizTimer);
        }
    }, 1000); //setting it to 1000 because it is in milliseconds
}

function questionStart(){
    questionEl.textContent = questions[questionSequence].question;
    answerAEl.textContent = questions[questionSequence].options[0];
    answerBEl.textContent = questions[questionSequence].options[1];
    answerCEl.textContent = questions[questionSequence].options[2];
    answerDEl.textContent = questions[questionSequence].options[3];
}



gameStart.addEventListener('click', function(){
    questionStart();
    setTime();
});


// WHEN I answer a question
// THEN I am presented with another question
const questions = [
    //Question 1
    {
        question: 'Which of these bands are not from the Seattle area?',
        options: ['Nirvana', 'Soundgarden', 'Faith No More', 'Jimi Hendrix'],
        answer: 'c', 
    },
    //Question 2 
    {
        question: 'Which of these billionaires is not from or live in Seattle?',
        options: ['Bill Gates', 'Elon Musk', 'Steve Balmer ', 'Jeff Bezos'],
        answer: 'b', 
    },
    //Question 3 
    {
        question: 'Which one of these NHL teams calls Seattle "home"?',
        options: ['Avalanche', 'Kraken', 'Sharks', 'Red Wings'],
        answer: 'b', 
    },
    //Question 4
    {
        question: 'The Pacific Northwest is home to which of these companies?',
        options: ['Amazon', 'Microsoft', 'Boeing', 'All of the Above'],
        answer: 'd', 
    },
    //Question 5
    {
        question: 'What does a Seattle Dog have in it?',
        options: ['Cream Cheese and Onions', 'Avocado and Chopped Tomatoes', 'Brown Mustard and Anchovies', 'Cheese and Chili'],
        answer: 'a', 
    }
]

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
function nextQuestion (options){
    if (options === questions[questionSequence].answer){
        guess.textContent = "🥳🥳 Correct!!! 🥳🥳";
        score++;
    } else {
        guess.textContent = 'Wrong! 💩';
        secondsLeft = secondsLeft - 10;
    }
    questionSequence++;
    questionStart();
    console.log('Score: '+ score);
    setTimeout(function(){
        guess.textContent='';
    }, 2000);
}

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
if (timeEl === 0 || questionSequence === 5){
    gameInProgess.style.display = 'hidden';
}

// WHEN the game is over
// THEN I can save my initials and score

function savedScores(){
    btnSubmit.addEventListener('click', function(evt){
        evt.preventDefault();
        let highScores = JSON.parse(localStorage.getItem('highScores'))||[];
        //object created for new scores
        let newScore = {
            initials: initials.value,
            score: score
        };
        localStorage.setItem('highScores', JSON.stringify(highScores));
    });
};