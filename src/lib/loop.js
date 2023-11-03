let tickInterval = 700
let crono

function stop() {
  if(!crono) return
  clearInterval(crono)
}

function internalTick(tick) {
  tick()
}

function start(tick) {
  if(crono) stop()
  crono = window.setInterval(() => internalTick(tick),tickInterval)
}

export {
  start,
  stop
}
