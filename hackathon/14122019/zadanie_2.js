/**
 * 1. Napisz funkcje ktora jako parametr przymie kolekcje taka jak w stalej data
 * i zwroci obiekt w ktorym kluczem bedzie wartosc wlasnosci "code" a wartoscia
 * bedzie wartosc wlasnosci "mid"
 *
 * czyli
 *
 * {
 *  THB: 0.1266,
 *  USD: 3.8234,
 *  ...
 * }
 *
 * 2. napisz funkcje, ktora jako parametr przyjmie obiekt zwrocony przez funkcje z pt1
 * i zwroci najmnijesza wartosc z listy
 */
const data = [
    { "currency": "bat (Tajlandia)", "code": "THB", "mid": 0.1266 },
    { "currency": "dolar amerykański", "code": "USD", "mid": 3.8234 },
    { "currency": "dolar australijski", "code": "AUD", "mid": 2.6445 },
    { "currency": "dolar Hongkongu", "code": "HKD", "mid": 0.4901 },
    { "currency": "dolar kanadyjski", "code": "CAD", "mid": 2.9041 },
    { "currency": "dolar nowozelandzki", "code": "NZD", "mid": 2.5310 },
    { "currency": "dolar singapurski", "code": "SGD", "mid": 2.8277 },
    { "currency": "euro", "code": "EUR", "mid": 4.2747 },
    { "currency": "forint (Węgry)", "code": "HUF", "mid": 0.0130 },
    { "currency": "frank szwajcarski", "code": "CHF", "mid": 3.8919 },
    { "currency": "funt szterling", "code": "GBP", "mid": 5.1292 },
    { "currency": "hrywna (Ukraina)", "code": "UAH", "mid": 0.1628 },
    { "currency": "jen (Japonia)", "code": "JPY", "mid": 0.034871 },
    { "currency": "korona czeska", "code": "CZK", "mid": 0.1676 },
    { "currency": "korona duńska", "code": "DKK", "mid": 0.5720 },
    { "currency": "korona islandzka", "code": "ISK", "mid": 0.031225 },
    { "currency": "korona norweska", "code": "NOK", "mid": 0.4240 },
    { "currency": "korona szwedzka", "code": "SEK", "mid": 0.4088 },
    { "currency": "kuna (Chorwacja)", "code": "HRK", "mid": 0.5747 },
    { "currency": "lej rumuński", "code": "RON", "mid": 0.8942 },
    { "currency": "lew (Bułgaria)", "code": "BGN", "mid": 2.1856 },
    { "currency": "lira turecka", "code": "TRY", "mid": 0.6614 },
    { "currency": "nowy izraelski szekel", "code": "ILS", "mid": 1.0989 },
    { "currency": "peso chilijskie", "code": "CLP", "mid": 0.004976 },
    { "currency": "peso filipińskie", "code": "PHP", "mid": 0.0755 },
    { "currency": "peso meksykańskie", "code": "MXN", "mid": 0.2010 },
    { "currency": "rand (Republika Południowej Afryki)", "code": "ZAR", "mid": 0.2657 },
    { "currency": "real (Brazylia)", "code": "BRL", "mid": 0.9346 },
    { "currency": "ringgit (Malezja)", "code": "MYR", "mid": 0.9247 },
    { "currency": "rubel rosyjski", "code": "RUB", "mid": 0.0613 },
    { "currency": "rupia indonezyjska", "code": "IDR", "mid": 0.00027339 },
    { "currency": "rupia indyjska", "code": "INR", "mid": 0.054045 },
    { "currency": "won południowokoreański", "code": "KRW", "mid": 0.003265 },
    { "currency": "yuan renminbi (Chiny)", "code": "CNY", "mid": 0.5478 },
    { "currency": "SDR (MFW)", "code": "XDR", "mid": 5.2985 }
]

function p1(collection) {
    /*
     // --- rozwiazanie 1;
    const output = {};

    for (let i = 0, ln = collection.length; i < ln; i += 1) {
        const code = collection[i].code;
        const mid = collection[i].mid;

        output[code] = mid;
    }

    return output;
    */
    /*
    // --- rozwiazanie 1a;
    const output = {};

    function callback(item, index) {
        output[item.code] = item.mid;
    }

    for (let i = 0, ln = collection.length; i < ln; i += 1) {
        callback(collection[i], i);
    }

    return output;
    */

    /*
    // --- rozwiazanie 1a;
    const output = {};

    function callback(item, index) {
        output[item.code] = item.mid;
    }

    collection.forEach(callback);

    return output;
    */

    /*
    // --- rozwiazanie 2;

    const output = {};

    collection.forEach(item => {
        output[item.code] = item.mid
    });

    return output;

    */

    // --- rozwiazanie ostateczne ;)

    return collection.reduce(function (output, {code, mid}) {
        output[code] = mid;
        return output;
    }, {});
}


function p2(data) {
    const values = Object.values(data);

    return Math.min(...values);

    // return Math.min(...Object.values(data));
}



// -----
function p2a(data) {
    return Object.values(data);
}

function p2b(data) {
    return Math.min(...data);
}

// ------ 

const codeMid = p1(data);

const min = p2(codeMid); // p2(p1(data));

// const min = p2b( p2a( p1(data) ) );

