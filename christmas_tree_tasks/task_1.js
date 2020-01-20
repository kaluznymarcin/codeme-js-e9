/**
 * W pliku breeds znajduje sie stala o tej samej nazwie co plik.
 * Stala ta przechowuje zestaw danych.
 *
 * napisz funkcje ktora zwroci obiekt, ktory jako klucz przyjmie wartosc pola "country_code"
 * a wartoscia bedzie wartosc z pola "origin"
 *
 * Czyli ma to byc obiekt reprezentujacy kod kraju i nazwe kraju
 *
 * {
 *  CA: 'Canada',
 *  US: 'United States',
 *  // ...
 * }
 */

  function task_1(data = breeds) {
    return data.reduce((acc, { country_code, origin }) => {
      acc[country_code] = origin;
      return acc;
    }, {})
  }
