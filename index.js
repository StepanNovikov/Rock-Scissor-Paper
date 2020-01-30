const hands = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const names = ['rock', 'paper', 'scissor'];
const colorWinner = "winner";

let handA = document.getElementById('handA');
let handB = document.getElementById('handB');
let nameA = document.getElementById('nameA');
let nameB = document.getElementById('nameB');

let playerA = document.querySelector('player-a');
let playerB = document.querySelector('player-b');


document.getElementById('play').addEventListener('click', play);
document.getElementById('stop').addEventListener('click', stopPlay);
document.getElementById('play-again').addEventListener('click', playAgain);

function play() {
    counterA = setInterval(runNumberA, 100)
    counterB = setInterval(runNumberB, 100);
}

function runNumberA(){
    const randomNumberA = getRandomNumberA();
    handA.setAttribute('class', hands[randomNumberA]);
    nameA.value = names[randomNumberA];
}

function runNumberB(){
    const randomNumberB = getRandomNumberB();
    handB.setAttribute('class', hands[randomNumberB]);
    nameB.value = names[randomNumberB];
}

function getRandomNumberA(){
    let min = 0;
    let max = 2;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomNumberB(){
    let min = 0;
    let max = 2;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function stopPlay(){
    clearInterval(counterA);
    clearInterval(counterB);

    if (nameA.value === 'scissor' && nameB.value === 'paper'){
        resultA();
    } else if (nameA.value === 'paper' && nameB.value === 'rock') {
        resultA();    
    } else if (nameA.value === 'rock' && nameB.value === 'scissor') {
        resultA();    
    }

    else if (nameA.value === 'paper' && nameB.value === 'scissor') {
        resultB();    
    } else if (nameA.value === 'scissor' && nameB.value === 'rock') {
        resultB();    
    } else if (nameA.value === 'rock' && nameB.value === 'paper') {
        resultB();    
    }
    
    else {
        playerA.innerHTML = 'Draw';
        playerB.innerHTML = 'Draw';
        playerA.setAttribute('class', 'Draw');
        playerB.setAttribute('class', 'Draw')
    }
}

function playAgain(){
    window.location.reload()
}

function resultA(){
    playerA.innerHTML = "You Win";
    playerA.setAttribute('class', colorWinner);
}

function resultB(){
    playerB.innerHTML = "You Win";
    playerB.setAttribute('class', colorWinner);
}