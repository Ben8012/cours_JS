'use strict'

let divResult = document.getElementById('result')

const fetchData = async (name,description) => {

   while (divResult.firstChild){
    divResult.removeChild(divResult.firstChild)
   }
   
   const fieldset = divResult.appendChild(document.createElement('fieldset'))
   const legend  = fieldset.appendChild(document.createElement('legend'))
   const p = fieldset.appendChild(document.createElement('p'))
   const divImage = fieldset.appendChild(document.createElement('div'))
   let data2
    try {
        const params = new URLSearchParams();
        const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/?`);
        const data1 = await response1.json();
        console.log(data1.results)
        let url1 
        for (let i = 0; i < data1.results.length; i++) {
            data1.results[i].name === name ? url1 = data1.results[i].url :''
           
        }
        //console.log(url1)
        const reponse2 = await fetch(url1)
        data2 = await reponse2.json()
        //console.log(data2.sprites.front_default)      
    } catch (error) {
        console.log(error);
    } finally {
        legend.innerHTML =`<h3>${name}</h3>`
        p.innerHTML =`Description : ${description}`
        divImage.innerHTML = ` <img src="${data2.sprites.front_default}" alt="">`;
    }
}


const myForm = document.forms['pokemon'];
myForm.addEventListener('submit', (event) => {
    event.preventDefault();
   // console.log(myForm.nom.value)
    if (myForm.nom.value.trim()) {
        fetchData(myForm.nom.value,myForm.description.value);   
    } else {
        alert('Form Invalid');
    }
});