import Game from './game';
import MovingObject from './movingObject.js';
import GameView from './gameview.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const game = new Game(ctx);
  window.game = game;
  window.MovingObject = MovingObject;

  window.ctx = ctx;
  // console.log(ctx);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 580);
  const gameView = new GameView(ctx);
  window.gameView = gameView;
  // gameView.start();
  // ctx.fillStyle = 'white';
  // ctx.fillRect(50, 50, 50, 50);

  // ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
  // ctx.strokeStyle = 'green';
  // ctx.lineWidth = 20;
  // ctx.fillstyle = 'white';
  // ctx.stroke();
  // ctx.fill();
});
