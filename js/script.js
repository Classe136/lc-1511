/*
 Ogni volta che dobbiammo ripetere delle istruzioni usiamo i cicli
? CICLO FOR
lo uso quando so quante volte devo ripetere le istruzioni
todo for(contatore; condizione; incremento/decremento){}

for(let i = 0; i < 10; i++){
}

? CICLO WHILE
lo uso quando non so quante volte devo ripetere un ciclo
todo while(condizione){}

let condizione = true;

while(condizione){
 console.log('Ciao');
 condizione = false;
}

? CICLI E ARRAY

const students = ['Edoardo', 'Simone', 'Francesco'];
for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}


? FOR OF 
? vantaggi non ho bisogno dell'indice e nemmeno dell'incremento per chè cicla su ogni valore di un array
? svantaggi se mi serve l'indice dell'elemento non ce l'ho più

const students = ['Edoardo', 'Simone', 'Francesco'];
for(let student of students){
    console.log(student);
}

? FUNZIONI SUGLI ARRAY

todo indexOf()

const index = students.indexOf('Simone'); //ritorna l'indice o -1
ci ritorna l'indice dell'elemento nell'array

todo includes()
 const flag = students.includes('Simone'); //ritorna true e false

todo splice(index,numel da eliminare) 
todo push(), unshift(),pop(),shift(), join(' ')


const students = [
	{ firstName: 'Mario', lastName: 'Rossi' , id:1},
	{ firstName: 'Luigi', lastName: 'Verdi', id:2 },
	{ firstName: 'Margherita', lastName: 'Bianchi', id:3 }
];

const studentsVote = [
  [10,5,6],
  [4,8,9]
];


*/
/*
todo FOREACH
*/
const students = [
  { firstName: "Mario", lastName: "Rossi", id: 1 },
  { firstName: "Luigi", lastName: "Verdi", id: 2 },
  { firstName: "Margherita", lastName: "Bianchi", id: 3 },
];

const studentsName = [];
const studentsObj = [];
students.forEach((element, index) => {
  studentsName.push(element.firstName + " " + element.lastName);
  const studentFullName = {
    name: element.firstName,
    surname: element.lastName,
  };
  studentsObj.push(studentFullName);
  // console.log(element.firstName);
  // console.log(index);
});

// console.log(studentsName);
// console.log(studentsObj);

const nomeStudenti = students.map(
  (element) => element.firstName + " " + element.lastName
);

//console.log(nomeStudenti);
const numbers = [10, 40, 30, 21, 7, 9];

//ritorna true o false

const evenNumbers = numbers.filter((element) => element === 100); //ritorna un array congli elementi che hanno passato il test o []
// console.log(evenNumbers);

const stDentWithId2 = students.find((element, index, arr) => {
  return element.firstName.includes("M");
}); // ritorna elemento o undefined

// console.log(stDentWithId2);

const index = students.findIndex((element, index, arr) => element.id === 5); //ritorna indice o -1
// console.log(index);
/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.

*/
const automobili = [
  { marca: "Ford", modello: "Mustang", alimentazione: "benzina" },
  { marca: "Toyota", modello: "Camry", alimentazione: "benzina" },
  { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
  { marca: "Honda", modello: "Civic", alimentazione: "benzina" },
  { marca: "Chevrolet", modello: "Cruze", alimentazione: "benzina" },
  { marca: "Hyundai", modello: "Elantra", alimentazione: "benzina" },
  { marca: "BMW", modello: "3 Series", alimentazione: "diesel" },
  { marca: "Mercedes-Benz", modello: "C-Class", alimentazione: "diesel" },
  { marca: "Audi", modello: "A3", alimentazione: "diesel" },
];

const autoAbenzina = automobili.filter(
  (auto) => auto.alimentazione === "benzina"
);

//console.log(autoAbenzina);

const autoDiesel = automobili.filter((auto) => auto.alimentazione === "diesel");

//console.log(autoDiesel);

const altreAuto = automobili.filter(
  (auto) => auto.alimentazione !== "diesel" && auto.alimentazione !== "benzina"
);

//console.log(altreAuto);
