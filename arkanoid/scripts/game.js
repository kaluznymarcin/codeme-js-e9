(function () {

  let score = 0;

  const gameElement = document.getElementById('arkanoid');
  const refCollection = gameElement.querySelectorAll('[ref]');

  const template = [...refCollection].reduce((obj, element) => {
    const name = element.getAttribute('ref');
    obj[name] = element;
    return obj;
  }, {});

  const {
    bricks,
    paddle,
    ball,
    arena
  } = template

  /* const brick = document.createElement('div');
  brick.classList.add('brick');
  bricks.appendChild(brick); */


  bricks.innerHTML = Array.from(new Array(27), () => {

    const score = [1, 3, 5]
    [Math.floor(
      Math.random() * 3
    )]
    return `<div class="brick" data-score="${score}"></div>`;
  }).join('');

  const {
    top: arenaTop,
    left: arenaLeft,
    width: arenaWidth,
    height: arenaHeight
  } = arena.getBoundingClientRect();

  const diameterBall = ball.offsetWidth
  const radiusBall = ball.offsetWidth / 2

  paddle.style.left = ((arenaWidth - paddle.offsetWidth) / 2) + 'px';

  ball.style.left = ((arenaWidth - diameterBall) / 2) + 'px';

  ball.style.top = (paddle.offsetTop - diameterBall) + 'px';

  let deltaX = 1;
  let deltaY = 1

  const onMouseMove = function (e) {

    const left = e.pageX - Math.round(arenaLeft);
    console.log(e.pageX, arenaLeft, left)
    paddle.style.left = `${Math.min(arenaWidth - paddle.offsetWidth, Math.max(left, 0))}px`
  };

  paddle.addEventListener('mousedown', function () {
    setInterval(function () {
      if (ball.offsetTop === 0) {
        deltaY *= -1;
      }
      if (ball.offsetLeft === arenaWidth - diameterBall) {
        deltaX *= -1;
      }

      /* if (ball.offsetTop === paddle.offsetTop - diameterBall) {
        deltaY *= -1;
      } */
      if (ball.offsetLeft === 0) {
        deltaX *= -1;
      }

      if (ball.offsetTop === paddle.offsetTop - diameterBall && ball.offsetLeft + radiusBall >= paddle.offsetLeft && ball.offsetLeft - radiusBall <= paddle.offsetLeft + paddle.offsetWidth) {
        //deltaX *= -1;
        deltaY *= -1;
      }

      if (ball.offsetTop === arenaHeight - diameterBall) {
        alert('LOL')
      }

      const x = ball.offsetLeft + deltaX
      const y = ball.offsetTop + deltaY
      const element = document.elementFromPoint(
          (x + radiusBall) + arenaLeft,
          y + arenaTop
      )

      if (element.classList.contains('brick')) {
        element.dataset.score
        element.dataset.bgColor
        element.classList.add('hide')
      }

      ball.style.top = y + 'px';
      ball.style.left = `${x}px`;
    }, 10)

    document.addEventListener('mousemove', onMouseMove, false);
  }, false);

  paddle.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', onMouseMove, false);
  }, false);

  console.log(arena.offsetLeft);
})()


/* paddle.addEventListener('click', function (event) {
    // event.stopPropagation()
    console.log('TU KLIKNĄŁEM :: PADDLE');
  }, true);

  arena.addEventListener('click', function (e) {
    console.log('ARENA - 1', e.target);
  }, true);

  arena.addEventListener('click', function (e) {
    console.log('ARENA - 2');
  }, true);

  document.body.addEventListener('click', function (e) {
    console.log('BODY', e.target);
  }, true);

  window.addEventListener('click', function (e) {
    console.log('WINDOW', e.target);
  }, true);
  /*
  paddle.addEventListener('mouseup', function () {
    console.log('MOUSE UP');
  }, false); */

  /*paddle.addEventListener('click', function (event) {
    event.stopPropagation();
  }, false);
  document.body.querySelector('a').addEventListener(
    'click',
    function (e) {
      e.stopPropagation();
      e.preventDefault();

      console.log(this);
    },
    false
  ) */

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
