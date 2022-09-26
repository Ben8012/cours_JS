'use strict'

//Creation d'element DOM
const p = document.createElement('p')
p.innerHTML = 'slt tout le monde'
p.style.color = 'lime'

const root = document.getElementById('root')
root.appendChild(p)

const p2 = document.createElement('p')
p2.innerHTML = 'slt tout le monde'
p2.style.color = 'red'
root.appendChild(p2)

//liste 
const tableauFruits = ['pomme ', 'poire ' , 'peche ', 'banane ','fraise ']
const myListe = document.getElementById('my-liste')

for (const fruit of tableauFruits) {
    const fruitItem = document.createElement('li')
    fruitItem.innerHTML = fruit
    myListe.appendChild(fruitItem)

    // creatioin d'un bouton

    const bntFruit = document.createElement('button')
    bntFruit.innerHTML = '+1'
    bntFruit.addEventListener('click', () =>{
        console.log('vous avez selectionné '+ fruit)
    })
    fruitItem.appendChild(bntFruit)
    myListe.appendChild(fruitItem)
}

//Objet

const product = {
    name: 'pomme',
    qty : 5,
    unitPrice : 5.50
}

const product2 = {
    'name': 'pomme',
    'qty' : 3,
    'unit-price' : 5.50
}
console.log(product.name)
console.log(product2['unit-price'])

product.description ='hello je suis une pomme'
console.log(product)

const json = JSON.stringify(product)
console.log(json)
console.log(JSON.parse(json))
