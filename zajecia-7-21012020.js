const obj = {};
const obj1 = new Object()
const obj2= Object.create(Object.prototype);

function Konstruktor(name) {
  const THIS = Object.create(Konstruktor.prototype);
  THIS.name = name;
  return THIS;
}

Object.assign(Konstruktor.prototype , {
  metoda1: function (a, b) {
    console.log(this)
  },
  metoda2: function () {

  }
})

class Klasa {
  constructor(name) {
    this.name = name;
  }

  metoda1(a, b) {
    console.log(this)
  }

  metoda2() {

  }
}


class Prostokat {
  constructor(a, b) {
    this.a = a;
    this.b = b
  }

  pole() {
    return this.a * this.b;
  }
}

class Kwadrat extends Prostokat {
  constructor(a) {
    super(a, a);
  }
}

const prototype = {
  pole: function () {
    return this.a * this.b;
  }
}

const prostokat = Object.create(prototype);

const kwadrat = Object.create(prostokat);

/* function prostokat() {
  function pole() {

  }

  return Object.freeze({
    pole
  })
}*/

/* function K() {
  throw new TypeError('Illegal constructor');
}
K.prototype = {
  m1: function () {

  },
  m2: function () {

  }
};

function createElement(name) {
  return Object.create(K.prototype);
} */


// audioPlayer = { volume: 14 }

const volumeButton = {
  delta: 0,
  onVolumeChange: function () {
    audioPlayer.volume += this.delta;
  }
}

const volumeButtonUp = Object.create(volumeButton);
volumeButtonUp.delta = 1;

const volumeButtonDown = Object.create(volumeButton);
volumeButtonDown.delta = -1;


class VolumeButton {
  static m = function () {}

  get bodyid() {

  }
  set bodyid(value) {

  }

  constructor() {
    this.delta = 0
  }

  onVolumeChange() {
    audioPlayer.volume += this.delta;
  }
}

class VolumeButtonUp extends VolumeButton {
  constructor() {
    super()
    this.delta = 1
  }
}

class VolumeButtonDown extends VolumeButton {
  constructor() {
    super()
    this.delta = -1
  }
}


const object = {
  pi: 3.14
}

/* Object.defineProperty(object, 'pi', {
  value: Math.PI,
  enumerable: false,
  writable: false,
  configurable: false
}) */

Object.defineProperty(object, 'polekola', {
  value: function (r) {
    return this.pi * r * r;
  }
})

/* Object.defineProperty(object, 'bodyid', {
  get: function () {
    return document.body.id;
  },
  set: function (value) {
    document.body.id = value;
  }
}) */

Object.defineProperties(object, {
  pi: {
    value: Math.PI,
    enumerable: false,
    writable: false,
    configurable: false
  },
  bodyid: {
    get: function () {
      return document.body.id;
    },
    set: function (value) {
      document.body.id = value;
    }
  }
});


const obfromcreate = Object.create({ onActive: function (r) { return 2 * this.pi * r;  } }, {
  pi: {
    value: Math.PI,
    enumerable: false,
    writable: true
  }
})

Konstruktor.m = function () {}
