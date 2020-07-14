import drawpaddle from "./paddle.js"
import drawball from "./ball.js"
import movement from "./movement.js"
import game1 from "./game.js"

let canvas = document.getElementById('gamearea')
let ctx = canvas.getContext('2d');

let game = new game1()
let lastTime = 0
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime
  lastTime = timestamp

  ctx.clearRect(0, 0, 800, 600)
  game.update(deltaTime)
  game.draw(ctx)

  requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)