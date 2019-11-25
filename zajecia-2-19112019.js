/// powtorka

let nazwaZmiennej = "tekst";
const PI = 3.14;

if (typeof nazwaZmiennej === "string") {
  nazwaZmiennej = "tekst";
} else if (typeof nazwaZmiennej === "number") {
  nazwaZmiennej = "number";
} else {

}


switch (typeof nazwaZmiennej) {
case "string":
  console.log('->> string');
  break;
case "number":
  console.log('->> number');
  break;
default:
  console.log('->>> ....');
  break;
}

for (let i = 0, max = 10; i < max; i += 1) {
  console.log(i);
}

const obj = [
  'a',
  'c'
]
for (let key of obj) {
  console.log(key);
}

let name = 'Ala';

function akcja(name, surename = '') {
  const hello = 'Witaj ';
  return hello + name + ' ' + surename;
}

console.log(akcja(name, 'lol'));
