const person = document.getElementById('person');
const loading = document.getElementById('loading');

// fetch('https://api.agify.io/?name=michael&country_id=BE')
//     .then((response) => {
//         // {name, age, count} // destructuring
//         response.json().then((data) => {
//             console.log(data);
//             const person = document.getElementById('person');
//             // // Création de l'élément contenant le nom
//             // const personName = document.createElement('h1');
//             // personName.innerHTML = data.name;
//             // // Création de l'élément contenant l'age
//             // const personAge = document.createElement('p');
//             // personAge.innerHTML = data.age;
//             // // Création de l'élément contenant l'age
//             // const personCount = document.createElement('p');
//             // personCount.innerHTML = data.count;

//             // person.appendChild(personName);
//             // person.appendChild(personAge);
//             // person.appendChild(personCount);

//             // Deuxième méthode - String Interpolation ´´

//             person.innerHTML = `
//                 <h1>Name: ${data.name}</h1>
//                 <p>Age: ${data.age}</p>
//                 <p>Count: ${data.count}</p>
//             `;
//         })
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         loading.style.display = 'none';
//         console.log('Je me lance de toute facon');
//     });

// console.log(data);

// Async/Await

const fetchData = async (name, country_id = 'BE') => {
    const loading = document.getElementById('loading');
    try {
        loading.classList.add('lds-circle');
        const params = new URLSearchParams();
        params.append('name', name);
        params.append('country_id', country_id);
        const response = await fetch(`https://api.agify.io/?${params.toString()}`);
        const data = await response.json();
        const person = document.getElementById('person');
        person.innerHTML = `
            <h1>Name: ${data.name}</h1>                 
            <p>Age: ${data.age}</p>
            <p>Count: ${data.count}</p>
        `;
    } catch (error) {
        console.log(error);
    } finally {
        loading.classList.remove('lds-circle');
    }
}

// fetchData("Benoît");

const myForm = document.forms['search-name'];

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (myForm.name.value.trim()) {
        fetchData(myForm.name.value.trim());
    } else {
        alert('Form Invalid');
    }
});