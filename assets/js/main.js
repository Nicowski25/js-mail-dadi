//creiamo lista email che hanno il permesso
const emailAllowed = [
    'nicola.faedo@gmail.com',
    'nicola@boolean.com'
]
//facciamo inserire all'utente la mail
const emailUser = prompt('inserisci la tua email')
//controlliamo se l'email è nella lista di quelle che hanno il permesso
for (let i = 0; i < emailAllowed.length; i++) {
    if (emailAllowed[i] == emailUser) {
        alert('l\'email ha il permesso')
    } else {
        alert('l\'email non ha il permesso')
    }
}