// The Quiz Questions

let quizQuestion = [{
    question: 'What year did The Smiths release Meat is Murder?',
    a: '1984',
    b: '1985',
    c: '1986',
    d: '1987',
    correct: 'b',
},
{
    question: 'Victoria LeGrand and Alex Scally form which band duo?',
    a: 'Beach House',
    b: 'Cocteau Twins',
    c: 'Wolf Alice',
    d: 'The Black Keys',
    correct: 'a',
},
{
    question: 'Love My Way is a single by which English band?',
    a: 'Sea Power (Formerly British Sea Power)',
    b: 'Radiohead',
    c: 'The Psychedelic Furs',
    d: 'Suede',
    correct: 'c',
},
{
    question: 'Reginald Kenneth Dwight is better known by what name?',
    a: 'Snoop Dogg',
    b: 'Elton John',
    c: 'Eminem',
    d: 'Meat Loaf',
    correct: 'b',
},
{
    question: 'Divide and Exit is an album from which post-punk band?',
    a: 'Joy Division',
    b: 'Fontaines DC',
    c: 'The Fall',
    d: 'Sleaford Mods',
    correct: 'd'
},
{
    question: 'Which Richard found earlier success as a member of the Britpop bands Pulp and Longpigs?',
    a: 'Richard Osman',
    b: 'Richard Ashcroft',
    c: 'Richard Hawley',
    d: 'Little Richard',
    correct: 'c',
},
{
    question: 'What year did Elvis Presley die?',
    a: '1977',
    b: '1978',
    c: '1979',
    d: '1980',
    correct: 'a',
},
{
    question: 'Which music legend won the Nobel Prize for literature in 2016?',
    a: 'Tom Waits',
    b: 'David Byrne',
    c: 'David Bowie',
    d: 'Bob Dylan',
    correct: 'd',
},
{
    question: 'Which legendary musician had film roles in The Prestige and Twin Peaks: Fire Walk With Me?',
    a: 'David Bowie',
    b: 'Nick Cave',
    c: 'Phil Collins',
    d: 'Sting',
    answer: 'a',
},
{
    question: 'Roger Taylor is the drummer in which band?',
    a: 'ELO',
    b: 'Queen',
    c: 'Led Zeppelin',
    d: 'Duran Duran',
    answer: 'b',
}
]

let quiz = document.getElementById('quiz');
let a_data = document.getElementById('a_data');
let b_data = document.getElementById('b_data');
let c_data = document.getElementById('c_data');
let d_data = document.getElementById('d_data');
let answerElements = document.querySelectorAll('.answer');
let questionElements = document.getElementById('question');
let submitBtn = document.getElementById('submit');



let startBox = document.getElementById('start-box');
let informationArea = document.getElementById('information-area');
let questionBank = document.getElementById('question-bank');
let startBtn = document.getElementById('start-btn-btn');
let btnContinue = document.getElementById('information-continue');
let backButton = document.getElementById('information-back');
let questionBtnBack = document.getElementById('question-btn-back');
let progressCount = document.getElementById('progress-count');

// EventListener for the Start Button

startBtn.addEventListener('click', function() {
    startBox.classList.add('hide');
    informationArea.classList.remove('hide');
})

// Eventlisteners for the Back Buttons

backButton.addEventListener('click', function() {
    startBox.classList.remove('hide');
    informationArea.classList.add('hide');
})

questionBtnBack.addEventListener('click', function() {
    questionBank.classList.add('hide');
    informationArea.classList.remove('hide');
})

// Eventlistener for the Continue Button

btnContinue.addEventListener('click', function() {
    informationArea.classList.add('hide');
    questionBank.classList.remove('hide');
})
