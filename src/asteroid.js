import MovingObject from './movingObject';
import * as Utils from './utils.js';

const DEFS = {
  COLOR: 'grey',
  RADIUS: 20,
  SPEED: 5,
};
class Asteroid extends MovingObject {
  constructor(options) {
    MovingObject.call(this, {
      pos: options['pos'],
      vel: Utils.randomVec(DEFS['SPEED']),
      color: DEFS['COLOR'],
      radius: DEFS['RADIUS'],
    });
  }
}

export default Asteroid;
