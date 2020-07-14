import { detect } from "./collisionDetection.js"

class drawball {
  constructor(game) {
    this.x = 10
    this.y = 80
    this.speedx = 2
    this.speedy = 2

    this.ball = document.getElementById('ball')
    this.game = game
    //this.reset()
  }
  draw(ctx) {
    ctx.drawImage(this.ball, this.x, this.y, 16, 16)
  }
  update(deltaTime) {
    this.x += this.speedx
    this.y += this.speedy
    if (this.y < 10) {
      this.speedy = -this.speedy
    }
    if (this.x > 784 || this.x < 10) {
      this.speedx = -this.speedx
    }
    if (detect(this, this.game.paddle)) {
      this.speedy = -this.speedy
      this.y = 514
    }
  }
  //reset() {
    //this.x = 10
    //this.y = 80
  //}
}

export default drawball