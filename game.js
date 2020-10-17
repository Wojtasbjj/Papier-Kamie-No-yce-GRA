// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

let playerHand = "";
let computerHand = 0;
const papier = document.getElementById('1')
const kamien = document.getElementById('2')
const nozyczki = document.getElementById('3')
const computerHands = [papier, kamien, nozyczki];
const letsPlay = document.querySelector('button');
const playerChoice = document.querySelector('.yourChoice');
const computerChoice = document.querySelector('.computerChoice');
const winer = document.querySelector('.winer');

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
    // playerChoice.textContent == 'Twój wybór: '
    // computerChoice.textContent == 'Wybór komputera: ' // musze wykminic jak czyscic po kazdej grze
    // winer.textContent == 'Zwycięzca gry: '

    if (playerHand == "") {
        alert('wybierz rękę!');
        return;
    }
    const computerHand = Math.floor(Math.random () * computerHands.length); //0 = papier, 1 = kamien, 2 = nozyczki
    console.log(`reka komputera: ${computerHand}`);
    console.log('zaczynamy gre');
    if (playerHand == papier){
        playerChoice.textContent = 'Twój wybór: papier';
        if(computerHand == 0){
            computerChoice.textContent = 'Wybór komputera: papier';
            winer.textContent = 'Zwycięzca gry: REMIS !'
            console.log('remis');
        }
        if(computerHand == 1) {
            computerChoice.textContent = 'Wybór komputera: kamień';
            winer.textContent = 'Zwycięzca gry: WYGRAŁEŚ !';
            console.log('user wins')
        }
        if(computerHand == 2) {
            computerChoice.textContent = 'Wybór komputera: nozyczki';
            winer.textContent = 'Zwycięzca gry: KOMPUTER WYGRAŁ :(';
            console.log('computer wins')
        }
    }
    if (playerHand == kamien) {
        playerChoice.textContent = 'Twój wybór: kamień';
        if(computerHand == 0){
            computerChoice.textContent = 'Wybór komputera: papier';
            winer.textContent = 'Zwycięzca gry: KOMPUTER WYGRAŁ :(';
            console.log('computer wins');
        }
        if(computerHand == 1) {
            computerChoice.textContent = 'Wybór komputera: kamień';
            winer.textContent = 'Zwycięzca gry: REMIS !'
            console.log('remis')
        }
        if(computerHand == 2) {
            computerChoice.textContent = 'Wybór komputera: nożyczki';
            winer.textContent = 'Zwycięzca gry: WYGRAŁEŚ !';
            console.log('user wins')
        }
    }
    if(playerHand == nozyczki) {
        playerChoice.textContent = 'Wybór komputera: nożyczki';
        if(computerHand == 0){
            computerChoice.textContent = 'Wybór komputera: papier';
            winer.textContent = 'Zwycięzca gry: WYGRAŁEŚ !';
            console.log('user wins');
        }
        if(computerHand == 1) {
            computerChoice.textContent = 'Wybór komputera: kamień';
            winer.textContent = 'Zwycięzca gry: KOMPUTER WYGRAŁ :(';
            console.log('computer wins')
        }
        if(computerHand == 2) {
            computerChoice.textContent = 'Wybór komputera: nożyczki';
            winer.textContent = 'Zwycięzca gry: REMIS !'
            console.log('remis')
        }
    }
    
}

//czas na ify kto kiedy wygrywa a pozniej podliczenie wynikow, liczby gier i innych statystyk.

letsPlay.addEventListener('click', play)
document.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', selectImage)
})