(function () {
  const slowa = ['javascript', 'java', 'php', 'elm'];
  const slowo = slowa[Math.floor(Math.random() * slowa.length)];
  let ukryteSlowo = Array.from(slowo, () => '_');
  let liczbaBledow = 5;
  let licznik = slowo.length;

  while (licznik) {
    const znak = prompt(`Podaj litere do slowa: ${ukryteSlowo.join(' ')}`);

    if (slowo.indexOf(znak) === -1) {
      liczbaBledow -= 1;
      if (liczbaBledow <= 0) {
        alert('koniec gry - hihihi');
        return;
      }
    } else if (znak && znak.length === 1) {
      ukryteSlowo = ukryteSlowo.map((element, index) => {
        if (znak === slowo[index]) {
          licznik -= 1;
          return znak;
        }

        return element;
      });
    }

    if (licznik === 0) {
      alert('Jesteś zwycięzcą');
      return;
    }

    if (!znak || znak.length > 1) {
      alert('Nie podałeś znaku lub wpisałeć ciąg kilku znaków\n\nWpisz jeden znak.')
    }
  }
}());

