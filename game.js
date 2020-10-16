// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

let playerHand = "";
const papier = document.getElementById('1')
const kamien = document.getElementById('2')
const nozyczki = document.getElementById('3')

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

document.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', selectImage)
})



