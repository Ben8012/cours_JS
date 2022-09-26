
function writeLine(output) {
    console.log(output);
}

function writeLine(a, b) {
    return a + b;
}

function writeLine(){
    console.log('okokok');
}


class Person{
    nom;
    age;

    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    sePresenter() {
        console.log('mon nom est ' + this.nom);
    }

}




const tabAssoc = {
    'key': 'value',
    // 'write': (output) => console.log(output)
    'write': writeLine//('salut')
}

console.log(tabAssoc['key'])
console.log(tabAssoc.key)

// writeLine('salut');
// tabAssoc.write('salut')


let personne = new Person('luc', 29);

personne.sePresenter()

console.log(this)


personne = {
    nom: 'luc',
    age: 29,
    sePresenter: () => console.log('mon nom est ' + personne.nom)
}

personne.sePresenter()


