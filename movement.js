let left = 37
let right = 39
let enter = 13
let esc = 27

class movement {
  constructor(game, paddle) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case left:
          paddle.moveLeft()
          break
        case right:
          paddle.moveRight()
          break
        case enter:
          game.start()
          break
        case esc:
          game.pause()
          break
      }
    })
    document.addEventListener('keyup', event => {
      paddle.stop()
    })
  }
}
export default movement