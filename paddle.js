class drawpaddle {
  constructor(gamewidth, gameheight) {
    this.width = 125
    this.height = 20
    this.x = gamewidth / 2 - this.width / 2,
    this.y = gameheight - this.height - 50
    this.speed_1 = 7
    this.speed = 0
  }
  moveLeft() {
    this.speed = -this.speed_1
  }
  moveRight() {
    this.speed = this.speed_1
  }
  stop() {
    this.speed = 0
  }
  draw(ctx) {
    ctx.fillStyle = "#281E5D"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  update(deltaTime) {
    this.x += this.speed
    if (this.x < 0) {
      this.x = 0
    }
    if (this.x > 675) {
      this.x = 675
    }
  }
}
export default drawpaddle