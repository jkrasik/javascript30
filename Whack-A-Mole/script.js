const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
var lastHole;
var timeUp = false;
var score = 0;

function randomTime(min,max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  //prevent drawing the same two holes in a row.
  if(hole == lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);

  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if(!timeUp) peep();
  }, time);
}

function bonk(e) {
  if(!e.isTrusted) return;
  else score++;
  this.classList.remove("up");
  scoreBoard.innerHTML = score;
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000);
}

moles.forEach(mole => mole.addEventListener('click', bonk));
