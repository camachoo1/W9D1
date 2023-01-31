import MovingObject from './movingObject';
import { randomVec, scale } from './util';

const DEFS = {
  COLOR: 'grey',
  RADIUS: 20,
  SPEED: 5,
};

class Asteroid extends MovingObject {
  constructor(options) {
    super({
      pos: options['pos'],
      vel: randomVec(DEFS['SPEED']),
      color: DEFS['COLOR'],
      radius: DEFS['RADIUS'],
      game: options['game'],
    });
  }
}

export default Asteroid;
