(function () {
  const slowa = ['javascript', 'java', 'php', 'elm'];
  const index = Math.floor(Math.random() * slowa.length);
  const slowo = slowa[index];
  let ukryteSlowo = Array.from(slowo, () => '_');
  let liczbaBledow = 5;

  //alert('szukane słowo: ' + ukryteSlowo.join(''));

  //const wpisanaLitera = prompt('Wpisz litere');
  while (ukryteSlowo.join('') !== slowo) {
    alert('Slowo: ' + ukryteSlowo.join(''));
    const wpisanaLitera = prompt('Wpisz litere');

    ukryteSlowo = Array.from(
      slowo,
      (litera, index) => litera === wpisanaLitera ? litera : ukryteSlowo[index]
    );


    liczbaBledow -= 1;
  }

  console.log(wpisanaLitera);
}());

