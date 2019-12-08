/**
 * Napisz funkcję, która przyjmie dwa parametry min i max typu number - liczby całkowite,
 * które będą określały przedział liczb całkowitych z obu stron zamknięty - czyli
 * liczby te należą do tego zbioru liczb.
 * Funkcja powinna wypisać (console.log) wszystkie liczby parzyste oraz zwrócić sumę wszystkich liczb
 * z przedziału określonego przez parametr min i max.
 */

function sum(min, max) {
  let sum = 0;

  for (let i = min; i <= max; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
    sum += i;
  }

  return sum;
}

// --- ze sprawdzeniami i z inna koncepcja

function sum(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Jeden z parametrow nie jest liczba');
  }

  const checked_min = Math.floor(Math.min(min, max));
  const checked_max = Math.ceil(Math.max(min, max));

  return Array.from(new Array(((checked_max - checked_min) + 1)), function (item, index) {
    return checked_min + index;
  }).reduce(function (sum, number) {
    if (number % 2 === 0) {
      console.log(number);
    }
    return sum + number;
  }, 0);
}
