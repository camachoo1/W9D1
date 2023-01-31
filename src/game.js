import Asteroid from './asteroid';
import MovingObject from './movingObject';

const SETTINGS = {
  DIM_X: 800,
  DIM_Y: 580,
  NUM_ASTEROIDS: 4,
};
class Game {
  constructor(ctx) {
    this.asteroids = [];
    this.addAsteroids();
    this.ctx = ctx;
    this.step = this.step.bind(this);
    this.draw = this.draw.bind(this);
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

  checkCollisions() {
    for (let i = 0; i < this.allObjects().length - 1; i++) {
      for (let j = i + 1; j < this.allObjects().length; j++) {
        let firstObj = this.allObjects()[i];
        let secondObj = this.allObjects()[j];
        if (firstObj.isCollidedWith(secondObj)) {
          firstObj.collideWith(secondObj);
        }
      }
    }
  }

  step() {
    this.moveObjects();
    this.checkCollisions();
  }

  allObjects() {
    return this.asteroids;
  }

  remove(asteroid) {
    if (asteroid instanceof Asteroid) {
      const asteroidIdx = this.asteroids.indexOf(asteroid);
      this.asteroids.splice(asteroidIdx, 1);
    }
  }
}

export default Game;
