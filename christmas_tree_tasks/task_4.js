/**
 * Dane tj. w zadaniu 1.
 *
 *  1. pobierz element #app w pliku index.html
 *  2. wstaw do niego utworzony poprzez metody interfejsu DOM element
 *     listy nieuporzadkowanej UL
 *  3. utworz elementy listy LI skladajace sie z nazwy rasy i opisu w postaci:
 *
 *     <li> <h6>Abyssinian</h6> The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.</li>
 *
 * wtaw elementy listy do elementu UL
 *
 */

  function task_4(data) {
    const container = document.getElementById('app');
    const ul = document.createElement('ul');
    const list = Object.values(task_2(data)).map(
      ({ name, description }) => `<li><h6>${name}</h6> ${description}</li>`
    ).join('');

    ul.innerHTML = list;

    container.appendChild(ul);

    return ul;
  }
