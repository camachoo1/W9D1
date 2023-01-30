class MovingObject {
  constructor(options) {
    this.pos = options['pos'];
    this.vel = options['vel'];
    this.radius = options['radius'];
    this.color = options['color'];
    this.game = options['game'];
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
}

export default MovingObject;
