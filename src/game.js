import Asteroid from './asteroid';

const SETTINGS = {
  DIM_X: 800,
  DIM_Y: 580,
  NUM_ASTEROIDS: 20,
};
class Game {
  constructor(ctx) {
    this.asteroids = [];
    this.addAsteroids();
    this.ctx = ctx;
  }

  start() {
    console.log('The game is starting...');
  }

  randomPosition() {
    return [
      Math.floor(Math.random() * SETTINGS['DIM_X']),
      Math.floor(Math.random() * SETTINGS['DIM_Y']),
    ];
  }

  addAsteroids() {
    for (let i = 0; i < SETTINGS['NUM_ASTEROIDS']; i++) {
      this.asteroids.push(
        new Asteroid({ pos: this.randomPosition(), game: this })
      );
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, SETTINGS['DIM_X'], SETTINGS['DIM_Y']);
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, SETTINGS['DIM_X'], SETTINGS['DIM_Y']);
    this.asteroids.forEach((asteroid) => {
      asteroid.draw(this.ctx);
    });
  }

  moveObjects() {
    this.asteroids.forEach((obj) => obj.move());
  }

  wrap(pos) {
    let [posX, posY] = pos;

    if (posX < 0) {
      posX = SETTINGS['DIM_X'];
    } else if (posX > SETTINGS['DIM_X']) {
      posX = 0;
    }
    if (posY < 0) {
      posY = SETTINGS['DIM_Y'];
    } else if (posY > SETTINGS['DIM_Y']) {
      posY = 0;
    }
    return [posX, posY];
  }
}

export default Game;
