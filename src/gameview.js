import Game from './game';

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx);
  }

  start() {
    setInterval(this.game.step, 20);
    setInterval(this.game.draw, 20);
  }
}

export default GameView;
