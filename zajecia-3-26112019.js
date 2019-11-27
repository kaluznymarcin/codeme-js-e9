// powtorka
if (false) {
  console.log()
} else {

}

true ? console.log('wykonaj jesli true') : console.log('wykonaj jesli false')

(false && console.log(1)) || console.log(2);

console.log('ogolny')

for (let min = 1, max = 10; min < max; min += 1) {
  console.log(min);
}


// ----
nazwaFunkcji('Marcin');


const mojaFunkcja = function () {
}

mojaFunkcja()

function nazwaFunkcji(param1) {
  console.log(param1)

  return 'Witaj ' + param1;
}

// let a = 10;

function lol(b) {
  // console.log(a);
  let  a = 100;
}

lol();


const nazwafn = (a, b) => a + b

const nazwafunkcji = (a, b) => a + b

const stralka = (a, b) => {
  const suma = a + b
  return suma * 2;
}

function limit(min = 2, max = 6, liczba) {
	return Math.max(min, Math.min(max, liczba));
}

const obj = {imie: 'Marcin', kolorOczu: 'szary'};

const obj1 = new Object();

const obj2 = {};


const array = [];
const array1 = new Array();
new Array('a', 'b')
// (2) ["a", "b"]

new Array('a')
// ["a"]

new Array({}, {})
// (2) [{…}, {…}]

new Array(5)
// (5) [empty × 5]length: 5

new Array(5, 7)
// (2) [5, 7]

new Array(4.8, 7.9)
// (2) [4.8, 7.9]

new Array(4.8)
//Uncaught RangeError: Invalid array length at <anonymous>:1:1

['a', 'b']
// (2) ["a", "b"]
// 0: "a"
// 1: "b"
// length: 2


const array = ['a', 'b', 'c']

const callback = (item, index) => console.log(item, ' ->> ', index);
array.forEach(callback);
// a  ->>  0
// b  ->>  1
// c  ->>  2


const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

let speed = 50;
let typeOfRoad = 'city';

if (typeOfRoad === 'city') {
  console.log('Miasto: ' + (speed <= 50 ? 'jade prawidlowo' : 'przekroczylem predkosc');
} else if (typeOfRoad === 'expressway') {

}
