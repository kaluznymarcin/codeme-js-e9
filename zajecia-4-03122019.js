// powtorka
const fn = (item, index) => item + ' - ' + index;
const newarray = ['a', 'b'].map(fn);


function myMap(array, callback) {
  if (!Array.isArray(array)) {
    throw new Error('Parametr array nie jest lista');
  }

  const newArray = [];

  for (let i = 0, ln = array.length; i < ln; i += 1) {
    newArray.push(callback(array[i], i));
  }

  return newArray;
}

console.log(myMap(['c', 'd'], (item) => item + item));

// -----

let number = 12;

let objNumber = new Number(12);
