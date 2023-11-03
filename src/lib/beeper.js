
const beepSound = new Audio('beep.mp3');
const mecSound = new Audio('mec.mp3');

function beep() {
  beepSound.play();
}

function mec() {
  mecSound.play();
}

export {
  beep,
  mec
}
