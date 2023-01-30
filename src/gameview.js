import Game from './game';

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx);
    this.moveObjects = this.game.moveObjects.bind(this.game);
    this.draw = this.game.draw.bind(this.game);
  }

  start() {
    setInterval(this.moveObjects, 20);
    setInterval(this.draw, 20);
  }
}

export default GameView;
