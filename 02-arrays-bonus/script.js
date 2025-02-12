const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

/* const reversedTeachers = teachers.reverse();
console.log(reversedTeachers); */

for (let index = teachers.length - 1 ; index >= 0; index--) {
  const reversedTeachers = teachers[index];
  console.log(reversedTeachers);
}

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

/* const longNames = teachers.filter((teacher) => teacher.length >= 5);
console.log(longNames) */;

for (let index = 0; index < teachers.length; index++) {
  const longNames = teachers.length[index];

  if (longNames >= 5) {
    console.log(longNames);
  }

}

// 3. Rimuovi 'Ed' dall'array teachers
const ed_index = teachers.indexOf("Ed")
console.log(ed_index);
teachers.splice(ed_index, 1)
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(teachersString);
