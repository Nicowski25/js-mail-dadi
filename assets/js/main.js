//creiamo lista email che hanno il permesso
const emailAllowed = [
    'nicola.faedo@gmail.com',
    'nicola@boolean.com',
    'tizio@caio.com'
]
console.log(emailAllowed);
//creiamo la variabile che punta al button emailcheck
const emailCheck = document.getElementById("emailCheck")
//creiamo una variabile true/false per vedere se è in lista o no
let access = false
//al click sul bottone controlliamo se è l'email è in lista
emailCheck.addEventListener('click',
    function () {
        //prendiamo la mail inserita nell'input
        const emailUser = document.getElementById("email").value
        console.log(emailUser);
            for (let i = 0; i < emailAllowed.length; i++) {
                    if (emailAllowed[i] == emailUser) {
                        let access = true;
                        console.log('ha il permesso');
                    } else {
                        console.log('non ha permesso');
                    }
            }
    }
)
//stampiamo se la mail ha il permesso o no
if (access = true) {
    console.log('permesso');
} else {
    console.log('non ha il permesso');
}

//troviamo il bottone play nella dom
const playButton = document.getElementById("play")
//alla click sul bottone iniziamo la nostra funzione
playButton.addEventListener('click',
    function () {
        //attribuiamo un valore da 1 a 6 alle variabili
        let userRand = (Math.floor(Math.random() * 6) + 1);
        let computerRand = (Math.floor(Math.random() * 6) + 1);
        //controlliamo e stampiamo chi ha vinto e di quanto
        if (userRand > computerRand) {
            alert(`hai vinto, il tuo dado ha fatto ${userRand} contro il ${computerRand} del computer`)
            console.log('ha vinto l\'utente');
        } else if (userRand < computerRand) {
            alert(`hai perso, il tuo dado ha fatto ${userRand} contro il ${computerRand} del computer`)
            console.log('ha vinto il computer');
        } else {
            alert('hai pareggiato')
        }
    }
)
