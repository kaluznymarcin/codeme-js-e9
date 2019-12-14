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
    { "data": "2019-10-31", "cena": 184.15 },
    { "data": "2019-11-04", "cena": 185.18 },
    { "data": "2019-11-05", "cena": 184.89 },
    { "data": "2019-11-06", "cena": 183.38 },
    { "data": "2019-11-07", "cena": 183.94 },
    { "data": "2019-11-08", "cena": 183.73 },
    { "data": "2019-11-12", "cena": 181.15 },
    { "data": "2019-11-13", "cena": 181.06 },
    { "data": "2019-11-14", "cena": 182.96 },
    { "data": "2019-11-15", "cena": 183.94 },
    { "data": "2019-11-18", "cena": 183.21 },
    { "data": "2019-11-19", "cena": 182.94 },
    { "data": "2019-11-20", "cena": 183.11 },
    { "data": "2019-11-21", "cena": 183.56 },
    { "data": "2019-11-22", "cena": 182.72 },
    { "data": "2019-11-25", "cena": 182.92 },
    { "data": "2019-11-26", "cena": 183.04 },
    { "data": "2019-11-27", "cena": 182.59 },
    { "data": "2019-11-28", "cena": 183.08 },
    { "data": "2019-11-29", "cena": 183.58 },
    { "data": "2019-12-02", "cena": 184.46 },
    { "data": "2019-12-03", "cena": 183.44 },
    { "data": "2019-12-04", "cena": 183.85 },
    { "data": "2019-12-05", "cena": 183.30 },
    { "data": "2019-12-06", "cena": 183.00 },
    { "data": "2019-12-09", "cena": 180.68 },
    { "data": "2019-12-10", "cena": 181.91 },
    { "data": "2019-12-11", "cena": 182.33 },
    { "data": "2019-12-12", "cena": 182.32 },
    { "data": "2019-12-13", "cena": 181.71 }
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


