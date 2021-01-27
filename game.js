import drawpaddle from "./paddle.js"
import drawball from "./ball.js"
import drawbrick from "./brick.js"
import movement from "./movement.js"

import { buildLevels, level1, level2 } from "./levels.js"

const GameState = {
  paused: 0,
  running: 1,
  menu: 2,
  newLevel: 3
}
class game {
  constructor() {
    this.gamestate = GameState.menu
    this.paddle = new drawpaddle(800, 600)
    this.ball = new drawball(this)
    new movement(this, this.paddle)
    this.gameObjects = []
    this.bricks = []
    this.levels = [level1, level2]
    this.currentLevel = 0
    //this.score = 0
  }
  start() {
    this.ball.reset()
    if (this.gamestate !== GameState.menu && this.gamestate !== GameState.newLevel) return
    this.bricks = buildLevels(this, this.levels[this.currentLevel])
    this.gameObjects = [
      this.paddle,
      this.ball
    ]
    this.gamestate = GameState.running
  }
  update(deltaTime) {
    if (this.gamestate === GameState.paused || this.gamestate === GameState.menu) return

    if (this.bricks.length === 0) {
      this.currentLevel++
      this.gamestate = GameState.newLevel
      this.start()
    }
    [...this.gameObjects, ...this.bricks].forEach(object => {
      object.update(deltaTime)
    })

    this.bricks = this.bricks.filter(brick => !brick.break)
  }
  draw(ctx) {
    [...this.gameObjects, ...this.bricks].forEach(object => {
      object.draw(ctx)
    })
    if (this.gamestate === GameState.paused) {
      ctx.rect(0, 0, 800, 600)
      ctx.fillStyle = "rgba(0,0,0,0.5)"
      ctx.fill()

      ctx.font = '30px fantasy'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText("Paused", 400, 300)
    }
    if (this.gamestate === GameState.menu) {
      ctx.rect(0, 0, 800, 600)
      ctx.fillStyle = "yellow"
      ctx.fill()

      ctx.font = "60px Verdana";
      var gradient = ctx.createLinearGradient(0, 0, 800, 0);
      gradient.addColorStop("0", " magenta");
      gradient.addColorStop("0.5", "blue");
      gradient.addColorStop("1.0", "red");
      // Fill with gradient
      ctx.textAlign = 'center'
      ctx.fillStyle = gradient;
      ctx.fillText("Brick Breakers", 400, 300);

      ctx.font = '35px fantasy'
      ctx.fillStyle = 'brown'
      ctx.textAlign = 'center'
      ctx.fillText("Press ENTER to Start", 400, 380)
    }
    if (this.ball.y > 584) {
      ctx.rect(0, 0, 800, 600)
      ctx.fillStyle = "yellow"
      ctx.fill()

      ctx.font = '60px fantasy'
      ctx.fillStyle = 'brown'
      ctx.textAlign = 'center'
      ctx.fillText("GAME OVER", 400, 300)
    }
  }
  pause() {
    if (this.gamestate == GameState.paused) {
      this.gamestate = GameState.running
    }
    else {
      this.gamestate = GameState.paused
    }
  }
}

export default game
