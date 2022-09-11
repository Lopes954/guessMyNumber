'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const btnCheck = document.querySelector ('.check');
const btnAgain = document.querySelector('.again');
let score = 20;
let highScore = 20;
console.log(secretNumber);



btnCheck.addEventListener('click', function(){
    let input = Number(document.querySelector('#guess').value);


    if(input === secretNumber){
        document.querySelector('.message').textContent = 'tu a GAGNER';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.backgroundColor = 'green';
        document.querySelector('#guess').style.backgroundColor = 'green';


    }
    if(input > secretNumber){
        document.querySelector('.message').textContent = 'le chiffre est INFERIEUR';
        document.querySelector('.number').style.backgroundColor = 'red';


    }
    if(input < secretNumber){
        document.querySelector('.message').textContent = 'le chiffre est SUPERIEUR';
        document.querySelector('.number').style.backgroundColor = 'red';


    }
    if(input > 20){
        document.querySelector('.message').textContent = 'le chiffre se situe entre 0 et 20';
        document.querySelector('.number').style.backgroundColor = 'red';

    }



    // (input !== secretNumber ? 'win' : 'looser')

})



btnAgain.addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('#guess').value = ''
    document.querySelector('.message').textContent = 'Commence a jouer'
    document.querySelector('.number').textContent = '?'
    document.querySelector('#guess').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.backgroundColor = 'grey';


    console.log(secretNumber);


})


document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highScore;





