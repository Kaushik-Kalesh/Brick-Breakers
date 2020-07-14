import { detect } from "./collisionDetection.js"

class brick {
  constructor(game, x, y) {
    this.brick = document.getElementById('brick')
    this.game = game
    this.x = x
    this.y = y
    this.height = 20
    this.width = 50

    this.break = false
  }
  update(deltaTime) {
    if (detect(this.game.ball, this)) {
      this.game.ball.speedy = -this.game.ball.speedy
      this.break = true
    }
  }
  draw(ctx) {
    ctx.drawImage(this.brick, this.x, this.y, this.width, this.height)
  }
}

export default brick