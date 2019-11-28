/**
 * Zadeklaruj stala CITY_SPEED_LIMIT i przypisz jej wartosc 50,
 * zadeklaruj stala TWO_LANE_EXPRESSWAY_SPEED_LIMIT i przypisz jej wartosc 120,
 * zadeklaruj stala HIGHWAY_SPEED_LIMIT i przypisz jej wartosc 140.
 *
 * Utworz zmienna speed, w ktorej bedzie mozna zmieniac wartosc.
 * Niech wartosc poczatkowow tej zmiennej wynosi 49.
 *
 * Utworz zmienna typeOfRoad, w ktorej bedzie mozna zmieniac wartosc.
 * Niech wartosc poczatkowa tej zmiennej wynosi 'city'.
 *
 * Napisz instrukcje warunkowa (if, switch lub jedna i druga), w której jezeli zostana spelnione warunki:
 *
 * 1. typeOfRoad ma wartosc 'city' i speed jest mniejsze od wartosci CITY_SPEED_LIMIT
 * to zostanie wyswietlony tekst 'Miasto: jedziesz prawidlowo'
 * jezeli ta predkosc jest wieksza od wartosci CITY_SPEED_LIMIT - wyswietlony zostanie tekst: 'Miasto: przekroczyles prędkość'.
 *
 * 2. typeOfRoad ma wartosc 'expressway' i speed jest mniejsze od wartosci TWO_LANE_EXPRESSWAY_SPEED_LIMIT
 * to zostanie wyswietlony tekst 'Eska: jedziesz prawidlowo'
 * jezeli ta predkosc jest wieksza od wartosci TWO_LANE_EXPRESSWAY_SPEED_LIMIT
 * - wyswietlony zostanie tekst: 'Eska: przekroczyles prędkość'.
 *
 * 3. typeOfRoad ma wartosc 'highway' i speed jest mniejsze od wartosci HIGHWAY_SPEED_LIMIT
 * to zostanie wyswietlony tekst 'Autostrada: jedziesz prawidlowo'
 * jezeli ta predkosc jest wieksza od wartosci HIGHWAY_SPEED_LIMIT
 * - wyswietlony zostanie tekst: 'autostrada: przekroczyles prędkość'.
 *
 * Rozwiazania prosze o przyslanie w postaci:
 * odnosnika do Twojego github, lub mailem: marcin.kaluzny@codeme.pl
 */

// --- Rozwiazanie podstawow ---

const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

let speed = 49;
let typeOfRoad = 'city';

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
