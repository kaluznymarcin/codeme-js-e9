/**
 * Dane tj. w zadaniu 1.
 *
 * napisz funkcje, ktora zwroci obiekt, w ktorym kluczem bedzie wartosc pola
 * "intelligence" a wartoscia bedzie lista z nazwami ras
 * kotow ktore maja intelligence o takiej wartosci
 *
 * const intelligenceList = {
 *  5: ["Abyssinian", "American Bobtail", ...],
 *  3: ["Aegean", ...],
 *  // ...
 * }
 */

  function task_3(data = breeds) {
    return data.reduce((acc, { intelligence, name }) => {
      if (!acc[intelligence]) {
        acc[intelligence] = [];
      }

      if (!acc[intelligence].includes(name)) {
        acc[intelligence].push(name)
      }

      return acc;
    }, {});
  }
