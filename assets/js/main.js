//creiamo lista email che hanno il permesso
const emailAllowed = [
    'nicola.faedo@gmail.com',
    'nicola@boolean.com',
    'tizio@caio.com'
]
console.log(emailAllowed);
//creiamo la variabile che punta al button emailcheck
const emailCheck = document.getElementById("emailCheck")
//al click sul bottone controlliamo se è l'email è in lista
emailCheck.addEventListener('click',
    function () {
        //prendiamo la mail inserita nell'input
        const emailUser = document.getElementById("email").value
        console.log(emailUser);
        for (let i = 0; i < emailAllowed.length; i++) {
                if (emailAllowed[i] == emailUser) {
                    alert('l\'email ha il permesso')
                    console.log('permesso');
                    break
                } else {
                    console.log('non ha il permesso');
                }
        }
    }
)
//troviamo il bottone play nella dom
const playButton = document.getElementById("play")
//alla click sul bottone iniziamo la nostra funzione
