const titre = document.getElementById('titre')

// contenu de la balise
console.log('la balise avec id titre: ',titre)
console.log('id : ',titre.id)
console.log('innertHTLM : ',titre.innerHTML)
console.log('hidden : ',titre.hidden)

// innerHTML vs innerTexte
titre.innerHTML ='<p>Hello World !!</p>' // interprete les balises HTML
//titre.innerText ='<p>Salut tout le monde</p>'  // n'interprete pas les balise comprise dans titre

// Valeur input 
const inputName = document.getElementById('inputName')
console.log('input value : ', inputName.value)

// evenement click sur le boutton 
const boutton = document.getElementById('boutton')
boutton.addEventListener('click' , ()=>{
    titre.classList.toggle('red')
    titre.innerHTML === '<p>Je viens de cliquer !!</p>'
        ? titre.innerHTML ='<p>Hello world !!</p>' 
        : titre.innerHTML ='<p>Je viens de cliquer !!</p>'
})


// string 
let montexte = 'ma chaine de charactere, l\''
montexte = " \"ma\" chaine de charactere"
montexte = `contenu de mon titre =  ${titre.innerHTML}`
console.log(montexte)

let prenom ='Benjamin'
let nom = "Sterckx"

console.log( nom + ' '+ prenom)
console.log(nom.concat(' ',prenom))


// Number
let age = 41
console.log(typeof(age))
age = '15'
console.log(typeof(age))

//let demande = prompt('Entrez un nombre : ')
//console.log(demande)
console.log(typeof(demande))
//demande = parseInt(demande)
console.log(typeof(demande))

const randoNumber = Math.random()*100;
console.log(' nombre aleatoire entre 0 et 100 au plus proche  : ',Math.round(randoNumber)) // au pus proche
console.log(' nombre aleatoire entre 0 et 100 arrondi inferieur : ',Math.floor(randoNumber)) // inferieur
console.log(' nombre aleatoire entre 0 et 100 arrondi supperieur: ',Math.ceil(randoNumber)) // superieur

let nbr = 5
nbr++,
console.log(nbr)
nbr--,
console.log(nbr)
nbr+=2 // nbr = nbr+2
console.log(nbr)

// Boolean
age =  18
let isSmall = false
 // operateur logique AND = &&  OU = ||
 age > 20 ? isSmall = false : isSmall = true 
 console.log(isSmall)

 age = '18'
 console.log(age === 18) // false car teste le type

 
