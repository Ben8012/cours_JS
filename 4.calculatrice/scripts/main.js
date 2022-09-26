'use strict'

let button = document.getElementById('button')
button.addEventListener('click', ()=>{

    let result   
    let nbr1 = parseInt(document.getElementById('nbr1').value)
    let op = document.getElementById('op').value
    let nbr2 = parseInt(document.getElementById('nbr2').value)
    let resultat = document.getElementById('result')
    let err = false

    if(isNaN(nbr1) || isNaN(nbr2)){
        // test supplementaire avec regex //
        console.err(nbr1, nbr2,'invalide')
        resultat.classList.add('error')
        resultat.innerHTML ='les valeurs sont invalides 😡'
        err = true

    }else{
        resultat.classList.remove('error')
        console.log(nbr1, nbr2,'valide')
        switch (op) {
            case '+':
                result = nbr1 + nbr2
                break;
            case '-':
                result = nbr1 - nbr2
                break;
            case '*':
                result = nbr1 * nbr2
                break;
            case '/':
                if(nbr2 == 0){
                    result = 'impossible'
                    resultat.setAttribute('class', 'error')
                }else{
                    result = nbr1 / nbr2
                }
                break;
            
            default:
                console.error('operateur invalide')
                result ='choisissez un operateur'
                break;
        }
        resultat.innerHTML = result 
    }

    
    
})









// nbr1.addEventListener('blur', ()=>{
//     !Number.isInteger(nbr1) ?  alerte('indiquez le premier nombre !!!!! NOMBRE !!!!') : ''
// })

// op.addEventListener('blur', ()=>{
//     op !== '+' && op !== '-' && op !== '*' && op !== '/' ?
//    alert('indiquez un operateur  : + , - ,* ou / !!!!')
//    : ''
// })

// nbr2.addEventListener('blur', ()=>{
//     !Number.isInteger(nbr2) ?  alerte('indiquez le premier nombre !!!!! NOMBRE !!!!') : ''
// })