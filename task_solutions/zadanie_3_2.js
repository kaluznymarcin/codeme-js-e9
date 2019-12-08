/**
 * Napisz funkcję, która przyjmie jako parametr str łańcuch znaków.
 * Funkcja powinna zwrócić string stworzony ze znaków znajdujących się na nieparzystej pozycji.
 * Jeżeli podczas wywołania funkcji nie zostanie podany argument to domyślnie funkcja jako parametr
 * str przyjmie łańcuch 'koparka'.
 */

function text(str = 'koparka') {
  let output = ''

  for (let i = 0, ln = str.length; i < ln; i += 1) {
    if (i % 2 === 0) {
      output += str[i];
    }
  }

  return output;
}


function text(str = 'koparka') {
  return Object.values(str).reduce((output, item, index) => {
    if (index % 2 === 0) {
      output += item;
    }
    return output;
  }, '');
}
