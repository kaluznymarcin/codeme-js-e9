/**
 * zadanie dodatkowe dla chetnych, ale zachecam zeby kazdy z Was sprobowal
 *
 * Zmien tak wytyczne zadania [2][1], zeby napisac funkcje,
 * ktora bedzie przyjmowala dwa parametry: speed
 * i typeOfRoad gdzie wartosc domyslna typeOfRoad jest rowna 'city'
 * funkcja powinna wypisywac to co jest zapisane w zadaniu [2][1]
 * kiedy przy wywolaniu podajemy speed i/lub typeOfRoad:
 *
 * czyli jezeli wywolam funkcje:
 *
 * myFunction(30); to zostanie wyswietlony tekst 'Miasto: jedziesz prawidlowo'
 * myFunction(150, 'expressway'); zostanie wyswietlony tekst 'Eska: przekroczyles prędkość'
 * itd.
 *
 * Rozwiazanie prosze o przyslanie: GitHub, lub mail marcin.kaluzny@codeme.pl
 */

// --- Rozwiazanie podstawow ---

const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

function radar(speed = 49, typeOfRoad = 'city') {
  switch (typeOfRoad) {
  case 'city':
    if (speed <= CITY_SPEED_LIMIT) {
      console.log('Miasto: jedziesz prawidłowo');
    } else {
      console.log('Miasto: przekroczyłeś prędkość');
    }
    break;
  case 'expressway':
    if (speed <= TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
      console.log('Eska: jedziesz prawidłowo');
    } else {
      console.log('Eska: przekroczyłeś prędkość');
    }
    break;
  case 'highway':
    if (speed <= HIGHWAY_SPEED_LIMIT) {
      console.log('Autostrada: jedziesz prawidłowo');
    } else {
      console.log('Autostrada: przekroczyłeś prędkość');
    }
    break;
  }
}

// --- Rozwiazanie zaawansowane oparte o tz. słownik ---

const dictionary = {
  city: {
    prefix: 'Miasto:',
    maxSpeed: 50
  },
  expressway: {
    prefix: 'Eska:',
    maxSpeed: 120
  },
  highway: {
    prefix: 'Autostrada:',
    maxSpeed: 140
  }
};

const message = ['przekroczyłeś prędkość', 'jedziesz prawidłowo'];

function radar_advanced(speed = 49, typeOfRoad = 'city') {
  const maxSpeed = dictionary[typeOfRoad].maxSpeed;
  const prefix = dictionary[typeOfRoad].prefix;
  const text = message[Number(speed <= maxSpeed)]

  console.log([prefix, text].join(' '));
}
