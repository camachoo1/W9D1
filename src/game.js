import Asteroid from './asteroid';

const SETTINGS = {
  DIM_X: 800,
  DIM_Y: 580,
  NUM_ASTEROIDS: 15,
};
class Game {
  constructor() {
    this.asteroids = [];
    this.addAsteroids();
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

  draw(ctx) {
    ctx.clearRect(0, 0, SETTINGS['DIM_X'], SETTINGS['DIM_Y']);
    ctx.fillStyle('black');
    ctx.fillRect(0, 0, SETTINGS['DIM_X'], SETTINGS['DIM_Y']);
  }

  moveObjects() {
    this.asteroids.forEach((obj) => obj.move());
  }
}

export default Game;
