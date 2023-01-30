import Asteroid from './asteroid';

class Game {
  constructor() {
    this.asteroid = new Asteroid(4);
  }

  start() {
    console.log('The game is starting...');
  }
}

export default Game;
