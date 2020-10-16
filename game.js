// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

let playerHand = "";
let computerHand = 0;
const papier = document.getElementById('1')
const kamien = document.getElementById('2')
const nozyczki = document.getElementById('3')
const computerHands = [papier, kamien, nozyczki];
const letsPlay = document.querySelector('button');

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
    if (playerHand == "") {
        alert('wybierz rękę!');
        return;
    }
    const computerHand = Math.floor(Math.random () * computerHands.length); //0 = papier, 1 = kamien, 2 = nozyczki
    console.log(`reka komputera: ${computerHand}`);
    console.log('zaczynamy gre');
    
}

//czas na ify kto kiedy wygrywa a pozniej podliczenie wynikow, liczby gier i innych statystyk.

letsPlay.addEventListener('click', play)
document.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', selectImage)
})



