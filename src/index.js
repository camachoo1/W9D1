import Game from './game';
import MovingObject from './moving_object.js';
document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  console.log(game);
  // window.game = game

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  // console.log(ctx);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 580);

  ctx.fillStyle = 'white';
  ctx.fillRect(50, 50, 50, 50);

  ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 20;
  ctx.fillstyle = 'white';
  ctx.stroke();
  ctx.fill();
});
