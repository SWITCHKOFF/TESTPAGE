document.getElementById('ClickButton1').addEventListener('mouseover', playHoverSound);

function playHoverSound() {
  var audio = document.getElementById('buttonSound1_hover');
  audio.currentTime = 0;
  audio.play();
}
document.getElementById('ClickButton2').addEventListener('mouseover', playHoverSound);

function playHoverSound() {
  var audio = document.getElementById('buttonSound2_hover');
  audio.currentTime = 0;
  audio.play();
}
document.getElementById('ClickButton3').addEventListener('mouseover', playHoverSound);

function playHoverSound() {
  var audio = document.getElementById('buttonSound3_hover');
  audio.currentTime = 0;
  audio.play();
}

document.getElementById('ClickButton2').addEventListener('click', playPressSound);

function playPressSound() {
  var audio = document.getElementById('buttonSound2_press');
  audio.currentTime = 0;
  audio.play();
}