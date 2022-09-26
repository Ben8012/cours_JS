function bonjourNom(prenom ,nom='Benjamin', age = 25){
    console.log(arguments)
    console.log(`bonjour ${prenom} ${nom} ${ age}`);
}
bonjourNom('john')
bonjourNom('john', 'doe',15)

//spreed operator
const chiffre = [1,2,3,4]
console.log(...chiffre)
const chiffreAjouter = [...chiffre,49]
console.log(chiffreAjouter)

const user = {
    nom : 'Ben',
    age : 25,
    description : 'je suis en formation'
}

console.log({...user, age : 27}) // permet de changer un valeur rapidement

// Descrtucturing

const plat = {
    name : 'Burger',
    price : 8,
    notes : {exelllent : 20}
}
console.log(plat.name);
console.log(plat.price);
console.log(plat.notes.exelllent);


const {name, notes} = {
    name : 'Burger',
    price : 8,
    notes : {exelllent : 20}
}
console.log(name);
console.log(notes.exelllent);


const product = [
    {
    name : 'burger I',
    price : 4,
    qty :3
    },
    {
    name : 'burger II',
    price : 4,
    qty :4
    },
    {
    name : 'burger III',
    price : 4,
    qty :2
    },
]

for (const {name,price,qty} of product) {
    console.log(name,'prix :', price,'€ quantitée :', qty)    
}

const calculeTVA  = (prix, tva) => {
    return prix + prix * tva
}

// resultat non memorisé
console.log(calculeTVA(100, 0.21))
// resultat memorisé
const prixTVAC = calculeTVA(100, 0.21)
console.log(prixTVAC);

let age = 16

const addAge = (age) =>{
    age +=1
    console.log('dans la fonction age =',age);
}
addAge(age)
console.log('hors fonction age =',age)

const a = 1
const b = 1

console.log(a === b); // test uniquement les valeurs 

const obj1 = {}
const obj2 = {}

console.log(obj1 === obj2);   // false car les adresse sont != idem pour les tableau car ce sont des objets

// primitive => recoit la valeur
// number
// string
// null
// undefined

let x = 1
let y = x
x = 5
console.log(x);
console.log(y);

let user1 = { name : 'Ben'}
let user2 = user1
user1.name ='Jane'
console.log(user1);
console.log(user2);

user1 = { name : 'riri'} // recréation d'une adresse !!
console.log(user1);
console.log(user2);

// Callback  => parametre de type fonction
// exemple avec addeventListerner

const sayHiCallback = (event) =>{
    console.log(event) // voir les propriete de l'evenement 
    console.log(event.target.parentNode) // exemple de propriete de l'evenement 
    console.log('hello')
}
console.log(sayHiCallback) // voir la fonction 

const btn = document.getElementById('btn')
btn.addEventListener('mouseenter', sayHiCallback) // donner la reference de la fonction 
btn.addEventListener('mouseleave', ()=>{
    console.log('bye bye')
}) 






