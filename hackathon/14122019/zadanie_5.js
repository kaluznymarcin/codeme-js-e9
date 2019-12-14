/**
 * Napisz funkcje get, ktora jako parametry przyjmie odpowiednio obiekt (object),
 * szukane zagniezdzenie w drzewie obiektu (path), i opcjonalnie wartosc domyslna (defaultValue),
 * ktora zostanie zwrocona jezeli nie zostanie znaleziona wartosc w sciezce.
 * Funkcja ma zwrocic wartosc w szukanej sciezce lub defaultValue
 *
 * const obj = {a: {b: {c: { d: 'super'} } } };
 *
 * get(obj, 'a.b.c.d', 'default');
 * // zwroci 'super'
 *
 * get(obj, 'e.f.g.h');
 * // zwroci undefined;
 *
 * get(obj, 'a.b');
 * // zwroci { c: { d: 'super' } }
 */
const obj = {a: {b: {
  c: {
    d: 'super'
  }
} } };


function get(object, path, defaultValue) {
  const pathArray = path.split('.');
  let parent = object;
  let output;

  for (let i = 0, ln = pathArray.length; i < ln; i += 1) {
    const name = pathArray[i];
    const child = parent[name];

    if (child && child === 'object') {
        parent = child;
    }
    if (i === pathArray.length - 1) {
      output = child
    }
  }

  return output || defaultValue;
}


function get(object, path, defaultValue) {
  return path.split('.').reduce(
    (parent, name) => parent && 'object' === typeof parent
      ? parent[name]
      : undefined,
    object
  ) || defaultValue;
}
