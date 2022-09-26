'use strict'
console.log('les boucles')

// les boucles

const tableau = ['riri','fifi','loulou']
console.log(tableau)
console.log('elements : ',tableau[0],tableau[1],tableau[2])
console.log('type : ',typeof(tableau))
console.log('longueur du tableau :',tableau.length)
console.log('---------------------------------')
console.warn('boucle while')
let i = 0
while(i < tableau.length){
    console.log('index ',i,' => ',tableau[i])
    i++
}
console.log('---------------------------------')
console.warn('boucle for')
for(let i = 0; i <tableau.length ; i++){
    console.log('index ',i,' => ',tableau[i])
}
console.log('---------------------------------')
console.warn('boucle do while')
i = 0
do{
    console.log('index ',i,' => ',tableau[i])
    i++
}while(i < tableau.length)
console.log('---------------------------------')
console.warn('for of')
for(const valeur of tableau){
    console.log(valeur)
}
console.log('---------------------------------')
console.warn('for in')
for(const key in tableau){
    console.log(key,'=>',tableau[key])
}
console.log('---------------------------------')
// methode
console.error('Méthodes')
console.log('---------------------------------')
console.warn('methode foreach')
tableau.forEach((e,index) => console.log(index,'=>',e))
console.log('---------------------------------')

const tableauChiffre = [1,2,3,4,5]
console.warn('methode map')
const res = tableauChiffre.map((e,index) => {return (index+1)+'*'+'2 = '+e*2}) // premet de renvoyer le resultat d'un fonction
console.log(tableauChiffre)
console.log(res)
console.log('---------------------------------')
console.warn('methode filter')
const notes = [5,11,12,6,9,20]
const notesSup10 = notes.filter(e =>{ 
    const nouvelleCote  = e + 3 
    return nouvelleCote > 10    // renvois les valeurs supp a 10 
})
console.log(notesSup10)
console.log('---------------------------------')
console.warn('methode reduce')
const sommeNote = notes.reduce((acc,note)=>{
        return acc + note
},0)
console.log('avec reduce :',sommeNote)
let sum = 0 
notes.forEach((e)=>{
    sum+=e
})
console.log('avec foreach :',sum)