(function () {
  const gameElement = document.getElementById('arkanoid');
  const refCollection = gameElement.querySelectorAll('[ref]');

  const template = [...refCollection].reduce((obj, element) => {
    const name = element.getAttribute('ref');
    obj[name] = element;
    return obj;
  }, {});


  // template.paddle.style.left = '100px'

  console.log([template.paddle.offsetWidth, template.arena.offsetWidth]);

  /* const template = {};

  for (let i = 0, ln = refCollection.length; i < ln; i += 1) {
      const element = refCollection[i];
      const name = element.getAttribute('ref');
      template[name] = element;
  }

  Array.from(refCollection).forEach(element => {
    const name = element.getAttribute('ref');
    template[name] = element;
}) */



})()
