import MovingObject from './movingObject';
import { randomVec, scale } from './util';

const DEFS = {
  COLOR: 'white',
  RADIUS: 20,
  SPEED: 5,
};

class Asteroid extends MovingObject {
  // static COLOR = 'grey';
  // static RADIUS = 25;
  // static SPEED = 5;
  constructor(options) {
    super({
      pos: options['pos'],
      vel: randomVec(DEFS['SPEED']),
      color: DEFS['COLOR'],
      radius: DEFS['RADIUS'],
      game: options['game'],
    });

    // constructor(options) {
    //   super({
    //     pos: options['pos'],
    //     vel: randomVec('SPEED'),
    //     color: 'COLOR',
    //     radius: 'RADIUS',
    //   });
    // MovingObject.call(this, {
    //   pos: options['pos'],
    //   vel: Utils.randomVec(DEFS['SPEED']),
    //   color: DEFS['COLOR'],
    //   radius: DEFS['RADIUS'],
    // });
  }
}

export default Asteroid;
