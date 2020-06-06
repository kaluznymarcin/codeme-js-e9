/**
 * Ponzej znajduje się kolekcja.
 *
 * 1. napisz funkcje która przyjmie paramet z taka kolekcja i zwroci
 * liste wszystkich cen z podanej kolekcji czyli np. [184.15, 185.18, ...]
 *
 * 2. napisz funkcje, która przyjmie jako parametr liste zwrocona przez funkcje z pt1
 * i zwroci liste z odwrotna kolejnoscia czyli np [181.71, 182.32, ...]
 *
 * 3. to co zwroci funkcja z pt2 wypisz za pomoca console.table()
 */
const collection = [
    {"data": "2020-05-18", "cena": 235.07},
    {"data": "2020-05-19", "cena": 235.48},
    {"data": "2020-05-20", "cena": 232.71},
    {"data": "2020-05-21", "cena": 233.94},
    {"data": "2020-05-22", "cena": 229.30}
];

function pt1(data) {
    return data.map(function (item) {
        return item.cena;
    });
}

function pt2(list) {
    return list.reverse();
}

function pt3(list) {
    console.table(list);
}

const myData = pt1(collection);

const orderedData = pt2(myData);

pt3(orderedData);

// const fn = compose(pt3, pt2, p1)
//fn(collection);
pt3(
    pt2(
        pt1(collection)
    )
)


