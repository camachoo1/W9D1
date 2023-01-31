import { distBetweenTwoPoints } from './util';
class MovingObject {
  constructor(options) {
    this.pos = options['pos'];
    this.vel = options['vel'];
    this.radius = options['radius'];
    this.color = options['color'];
    this.game = options['game'];
    this.isCollidedWith = this.isCollidedWith.bind(this);
    this.collideWith = this.collideWith.bind(this);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      Math.PI * 2,
      true
    );
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  move() {
    const [velX, velY] = this.vel;
    this.pos[0] += velX;
    this.pos[1] += velY;
    this.pos = this.game.wrap(this.pos);
  }

  isCollidedWith(otherObj) {
    console.log(otherObj);
    const radiiSum = this.radius + otherObj.radius;

    return distBetweenTwoPoints(this.pos, otherObj.pos) < radiiSum
      ? true
      : false;
  }

  collideWith(otherObj) {
    if (this.isCollidedWith(otherObj)) {
      this.game.remove(this);
      this.game.remove(otherObj);
      alert('COLLISION');
    }
  }
}

export default MovingObject;
