//gdy klikne dwa razy w np papier reka nadal jest wybrana trzeba dac papier.classlist.inculde (.choice)

let playerHand = "";
let computerHand = 0;
const papier = document.getElementById('1')
const kamien = document.getElementById('2')
const nozyczki = document.getElementById('3')


const paperIco = document.createElement("img");
paperIco.src = "paper.jpg";

const computerHands = [papier, kamien, nozyczki];
const letsPlay = document.querySelector('button');
const playerChoice = document.querySelector('.yourChoice');
const computerChoice = document.querySelector('.computerChoice');
const winer = document.querySelector('.winer');
let numbers = document.querySelector('.numbersSpan');
let wins = document.querySelector('.winsSpan');
let losses = document.querySelector('.lossesSpan');
let draws = document.querySelector('.drawsSpan');
const images = [`papier`, 'kamień', 'nożyce', {
    img: "images/paper.jpg",
    text: 'paperICO'}];
let indexImage = 0;


    const imageChange = () => {
        // console.log(images[indexImage]);
        // computerChoice.textContent = `Wybór komputera: ${images[indexImage]}`
        // indexImage++;
        // if (indexImage == images.length) {
        //     indexImage = 0;
            if (playerHand == papier) {
                computerChoice.textContent = `Wybór komputera: ${images[indexImage]}`
                indexImage++;
                if (indexImage == images.length) {
                indexImage = 0;
                }
            }
            if (playerHand == kamien) {
                computerChoice.textContent = `Wybór komputera: ${images[indexImage]}`
                indexImage++;
                if (indexImage == images.length) {
                indexImage = 0;
                }
            }
            if (playerHand == nozyczki) {
                computerChoice.textContent = `Wybór komputera: ${images[indexImage]}`
                indexImage++;
                if (indexImage == images.length) {
                indexImage = 0;
                }
            }
    }

    const setInt = setInterval(imageChange, 300);

const selectImage = (e) => {
    // console.log(e.target);
    if (e.target == papier) {
        papier.classList.toggle('choice');
        kamien.classList.remove('choice');
        nozyczki.classList.remove('choice');
        playerHand = papier;
        console.log('gracz wybrał papier')
    }

    if (e.target == kamien) {
        kamien.classList.toggle('choice');
        nozyczki.classList.remove('choice');
        papier.classList.remove('choice');
        playerHand = kamien;
        console.log('gracz wybrał kamien')
    }

    if (e.target == nozyczki) {
        nozyczki.classList.toggle('choice');
        papier.classList.remove('choice');
        kamien.classList.remove('choice');
        playerHand = nozyczki;
        console.log('gracz wybrał nozyczki')
    }
}

const play = (e) => {
    numbers.textContent++;
    if (playerHand.classList == "") {
        alert('wybierz rękę!');
        return;
    }
    let computerHand = Math.floor(Math.random () * computerHands.length); //0 = papier, 1 = kamien, 2 = nozyczki
    console.log(`reka komputera: ${computerHand}`);
    console.log('zaczynamy gre');
    if (playerHand == papier){
        playerChoice.textContent = 'Twój wybór: papier';
        if(computerHand == 0){
            computerChoice.textContent = 'Wybór komputera: papier';
            winer.textContent = 'Zwycięzca gry: REMIS !'
            draws.textContent++;
            console.log('remis');
        }
        if(computerHand == 1) {
            computerChoice.textContent = 'Wybór komputera: kamień';
            winer.textContent = 'Zwycięzca gry: WYGRAŁEŚ !';
            wins.textContent++
            console.log('user wins')
        }
        if(computerHand == 2) {
            computerChoice.textContent = 'Wybór komputera: nozyczki';
            winer.textContent = 'Zwycięzca gry: KOMPUTER WYGRAŁ :(';
            losses.textContent++;
            console.log('computer wins')
        }
    }
    if (playerHand == kamien) {
        playerChoice.textContent = 'Twój wybór: kamień';
        if(computerHand == 0){
            computerChoice.textContent = 'Wybór komputera: papier';
            winer.textContent = 'Zwycięzca gry: KOMPUTER WYGRAŁ :(';
            losses.textContent++
            console.log('computer wins');
        }
        if(computerHand == 1) {
            computerChoice.textContent = 'Wybór komputera: kamień';
            winer.textContent = 'Zwycięzca gry: REMIS !';
            draws.textContent++;
            console.log('remis');
        }
        if(computerHand == 2) {
            computerChoice.textContent = 'Wybór komputera: nożyczki';
            winer.textContent = 'Zwycięzca gry: WYGRAŁEŚ !';
            wins.textContent++;
            console.log('user wins');
        }
    }
    if(playerHand == nozyczki) {
        playerChoice.textContent = 'Wybór komputera: nożyczki';
        if(computerHand == 0){
            computerChoice.textContent = 'Wybór komputera: papier';
            winer.textContent = 'Zwycięzca gry: WYGRAŁEŚ !';
            wins.textContent++;
            console.log('user wins');
        }
        if(computerHand == 1) {
            computerChoice.textContent = 'Wybór komputera: kamień';
            winer.textContent = 'Zwycięzca gry: KOMPUTER WYGRAŁ :(';
            losses.textContent++;
            console.log('computer wins');
        }
        if(computerHand == 2) {
            computerChoice.textContent = 'Wybór komputera: nożyczki';
            winer.textContent = 'Zwycięzca gry: REMIS !';
            wins.textContent++;
            console.log('remis')
        }


    }
    
    // setTimeout(() => {
    //     console.log('ruszamy za 3 sec');
    // }, 3000);

    playerHand = "";
    papier.classList.remove('choice');
    kamien.classList.remove('choice');
    nozyczki.classList.remove('choice');

}

letsPlay.addEventListener('click', play)
document.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', selectImage)
})