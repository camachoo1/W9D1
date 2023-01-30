import Asteroid from './asteroid';

const SETTINGS = {
  DIM_X: 800,
  DIM_Y: 580,
  NUM_ASTEROIDS: 15,
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
        new Asteroid({ pos: this.randomPosition() })
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
}

export default Game;
