'use strict'
console.log('demo des dates')

const date = new Date();
console.log(date)

// variable de type objet
console.log(typeof(date))

// verifier si date est bien une instance de l'objet Date
console.log(date instanceof Date)

// initialisé un objet date

// via des nombres ( années , mois , jours) !! constructeur => année , index du mois , jours , heure, seconde , milliseconde
const d2 = new Date(2022,8-1,30)
console.log(d2)
const d3 = new Date(2022,0,1,12,30)
console.log(d3)

// via le constructeur qui prend un seul nombre (timestamp)
const d4 = new Date(1661851110000)  // temps a mettre en milli-secondes
console.log(d4)

// via le constructeur qui prend un chaine de charactere 
const d5 = new Date('2022-08-30')
console.log(d5)

// Récupere des valeurs

const today = new Date()
const todayDate = today.getDate()
console.log('Date: ',todayDate)

const todayDay = today.getDay()
console.log('Jour: ',todayDay) //!! calendrier americain commence le dimanche // jour +1 

const todayMonth = today.getMonth()
console.log('Moi: ',todayMonth) /// mois +1

const todayYear = today.getFullYear()
console.log('Année: ',todayYear) // %100 pour avoir les 2 derniers chiffres 

// modifier des valeurs 

const dateModif = new Date(2022,8,1);
console.log('initial : ',dateModif)

dateModif.setMonth(7)
console.log('change mois : ',dateModif)

dateModif.setDate(dateModif.getDate()+7) // dans une semaine
console.log('change mois : ',dateModif)

dateModif.setMinutes(42) // dans 42 minutes
console.log('change mois : ',dateModif)

// Afficher la date sous fomre de chaine de charactere
// formatage de base
const todayString = today.toString();
console.log(todayString)

// formatage norme ISO
const todayISO= today.toISOString();
console.log(todayISO)

// formatage en francais 

// V1 oldshcool

const day = today.getDate();
const year = today.getFullYear();
let month;
switch (today.getMonth()+1) {
    case 1:
        month='janvier'
        break;
    case 2:
        month='fevier'
        break;
    case 3:
        month='mars'
        break;
    case 8:
        month='aout'
        break;
    default:
        month ='other ...'
        break;
}

const frenchDateV1 = day +' '+ month +' '+ year
console.log(frenchDateV1)

// V2 tolocalString

const frenchDateV2 = today.toLocaleString('fr-be',{
    year:'numeric',
    month:'long', 
    day:'numeric'
}) // premier parament local , deuxieme option
console.log(frenchDateV2)

// Bonus : le tolocalString sur les number
const price = 1450.30
const priceFormatted = price.toLocaleString('fr-be',{
    style : 'currency',
    currency : 'EUR'  
})
console.log(priceFormatted)