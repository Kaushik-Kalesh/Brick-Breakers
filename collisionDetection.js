export function detect(ball, obj) {
  let bottomOfball = ball.y + 16
  let topOfball = ball.y
  
  let topOfobject = obj.y
  let bottomOfobject = obj.y + obj.height
  let leftOfobject = obj.x
  let rightOfobject = obj.x + obj.width

  if(bottomOfball >= topOfobject &&
  topOfball <= bottomOfobject &&
  ball.x >= leftOfobject &&
  ball.x + 16 <= rightOfobject) {
    return true
  }
  else {
    return false
  }
}