const root = document.getElementById('root')
const div1 = root.appendChild(document.createElement('div'))
div1.setAttribute('id','liste')
const div2 = root.appendChild(document.createElement('div'))
div2.setAttribute('id','panier')

const tabFruit =[
    {
        nom : 'pomme ',
        prix : 2
    },
    {
        nom : 'poire ',
        prix : 1
    },
    {
        nom : 'banane ',
        prix : 3
    }
    
]
const ul = div1.appendChild(document.createElement('ul'))
let pTotal; 
let total = [];
let totalMoins = [];
let totalTout = 0;
let totaltoutMoins = 0;
for (const fruit in tabFruit) {

    const li = ul.appendChild(document.createElement('li'))
    li.innerHTML = tabFruit[fruit].nom
   
    const bnt = li.appendChild(document.createElement('button'))
    bnt.innerHTML = '+'
    const bnt2 = li.appendChild(document.createElement('button'))
    bnt2.innerHTML = '-'
    let i = 0
    let p;

    const panier = document.getElementById('panier')
    bnt.addEventListener('click', () =>{
        !pTotal ? pTotal = div2.appendChild(document.createElement('p')) :''
        
        if(!document.getElementById(tabFruit[fruit].nom)){
            p = panier.appendChild(document.createElement('p'))
            p.setAttribute('id',tabFruit[fruit].nom)
            i++
            p.innerHTML = i + ' '+tabFruit[fruit].nom + ' '+ (tabFruit[fruit].prix*i)+'€'
            //console.log(tabFruit[fruit].nom);
            total.push(tabFruit[fruit].prix)
            for (let index = 0; index < total.length; index++) {
                totalTout += total[index]
            }
        }else {
            span = document.getElementById(tabFruit[fruit].nom).lastChild
            i++
            p.innerHTML = i + ' '+tabFruit[fruit].nom + ' '+ (tabFruit[fruit].prix*i)+'€'
            total.push(tabFruit[fruit].prix)
            //console.log(total)
            for (let index = 0; index < total.length; index++) {
                totalTout += total[index] 
            }

        }
        
        
        pTotal.innerHTML = 'Total : ' + totalTout +"€"
        

    })

    bnt2.addEventListener('click',()=>{
        !pTotal ? pTotal = div2.appendChild(document.createElement('p')) :''
        if(document.getElementById(tabFruit[fruit].nom)&& i > 1){
            i--
            p.innerHTML = i + ' '+tabFruit[fruit].nom + ' '+ (tabFruit[fruit].prix*i)+'€'
            totalMoins.push(tabFruit[fruit].prix)
            console.log(totalMoins)
            for (let index = 0; index < totalMoins.length; index++) {
                totaltoutMoins += totalMoins[index]
                console.log(totalMoins[index])
            }
           
        }else if( document.getElementById(tabFruit[fruit].nom) && i === 1){
            panier.removeChild(p)
            div2.removeChild(pTotal)
        }

        pTotal.innerHTML = 'Total : ' + (totalTout-totaltoutMoins) +"€"

    })

  
    
}

