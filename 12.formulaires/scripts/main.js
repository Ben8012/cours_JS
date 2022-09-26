'use strict'
console.warn('les formulaires')

let square = document.getElementById('square')
square.addEventListener('mouseenter',(event)=>{
    //console.log(event)
    //inline style
   

    // Class
    event.target.classList.toggle('rounded')
    //event.target.style.position ='absolute'
    //event.target.style.left =`${Math.random()*100}px`
    event.target.style.backgroundColor ='green' // use camelCase
    setTimeout(() => {
      
    }, 1000);
})

square.addEventListener('mouseout',(event)=>{
    event.target.classList.toggle('rounded')
    event.target.style.backgroundColor ='cornflowerblue'
    setTimeout(() =>{
        
    },1000)
  
   
})

const nameInput = document.getElementById('name')

nameInput.addEventListener('change',(event) =>{
    console.log(event.target.value)
})

nameInput.addEventListener('keyup',(event) =>{
    console.log(event.target.value,'key up')
    console.log(event.keyCode,'code')
    console.log(event.code,'nom touche')
})

nameInput.addEventListener('keydown',(event) =>{
    console.log(event.target.value,'key down')
})

// blur souvent utilisé pour la confirmation de formulaire
nameInput.addEventListener('blur',(event) =>{
    console.log('perdu focus input')
})



const formContact = document.querySelector('#contact-form')

//console.log(document.forms['contact'])
//console.log(document.forms[0])

//console.log(formContact)

formContact.addEventListener('submit',(event) =>{
    
    event.preventDefault()
    console.log('Je suis envoyé')
    const data = new FormData(event.target)
    console.log('FormData',data)
    console.log('form email :', data.get('email')) // donne la valeur de l'input par la valeur du name
    console.log('form message :', data.get('message'))

    event.target.reset(); // efface les données du formulaire
    console.log(location);
   
})

document.getElementById('send-form').addEventListener('click',(event) =>{
    document.forms['contact'].submit() // !! refresh !! pas de prevent default !!
  
})

console.warn('set time out')
// decompte 
let count = 0
console.log(count)
setTimeout(() => {
    count++
    // console.log(count)
    // clearInterval existe aussi 
}, 1000); // 1000 milli-secondes

console.warn('set interval')
let acc = 0
console.log(acc);
const intervalId =  setInterval(()=>{
    acc++
    console.log(acc);
    acc === 10 ? clearInterval(intervalId) : '' 
},100)