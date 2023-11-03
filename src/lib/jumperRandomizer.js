const NO_JUMPER = 0
const JUMPER_UP = 1
const JUMPER_DOWN = 2
const UP_PROBABILITY = 0.5

let lastUp = -1

const PROBABILITY_TABLE = [
  { until: 150, probability: 0.1 },
  { until: 300, probability: 0.2 },
  { until: 400, probability: 0.3 },
  { until: 600, probability: 0.4 },
  { until: Number.MAX_SAFE_INTEGER, probability: 0.5 },
]

function getProbability(counter) {
  const probability = PROBABILITY_TABLE.find((item) => counter < item.until)
  return probability.probability
}

function randomJumper(counter) {
  const probability = getProbability(counter)

  if(Math.random() < probability) {
    if(counter - lastUp < 2) {
      return JUMPER_UP
    }
    const up = Math.random() < UP_PROBABILITY
    if(up) {
      lastUp = counter
      return JUMPER_UP
    }
    return JUMPER_DOWN
  }

  return NO_JUMPER
}

export {
  randomJumper,
  JUMPER_UP,
  JUMPER_DOWN
}
