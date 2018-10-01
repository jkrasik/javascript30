const pressed = [];
const secretCode = "konami";

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  //makes the pressed array the exact length of the secret word
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)) {
    alert("You wrote konami code!");
  }
});
