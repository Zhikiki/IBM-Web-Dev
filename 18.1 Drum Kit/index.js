function checkLeter(leter) {
  switch (leter) {
    case 'w':
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      var kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;
    case 's':
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'j':
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    case 'k':
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'l':
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(leter);
  }
}

function addAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 200);
  console.log(activeButton);
}

// DDETECTING BUTTON CLICK AND HANDLING
function handleClick() {
  console.log(this.innerHTML);
  var buttonInnerHtml = this.innerHTML;
  checkLeter(buttonInnerHtml);
  addAnimation(buttonInnerHtml);
  // this.style.color = 'white';
}
// Setting event listener OPTION 1
// var set = document.querySelectorAll('.set button');
// set.forEach((element) => {
//   element.addEventListener('click', handleClick);
// });

// Setting event listener OPTION 2
var set = document.querySelectorAll('.set button');
for (let i = 0; i < set.length; i++) {
  const button = set[i];
  button.addEventListener('click', handleClick);
}
// var audio = new Audio('./sounds/tom-1.mp3');
//   audio.play();

// DDETECTING KEYBOARD PRESS AND HANDLING

document.addEventListener('keydown', function (event) {
  var key = event.key;
  checkLeter(key);
  addAnimation(key);
});
