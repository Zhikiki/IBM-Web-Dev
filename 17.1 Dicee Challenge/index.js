// MY OPTION TO SOLVE THE CHELLANGE
///////////////////////////////////

// function randomNumber1() {
//   var n = Math.floor(Math.random() * 6 + 1);
//   return n;
// }

// function randomNumber2() {
//   var n = Math.floor(Math.random() * 6 + 1);
//   return n;
// }

// var srcName1 = './images/dice' + randomNumber1() + '.png';
// var srcName2 = './images/dice' + randomNumber2() + '.png';

// document.querySelector('.img1').setAttribute('src', srcName1);
// document.querySelector('.img2').setAttribute('src', srcName2);

// function headerText(number1, number2) {
//   var headerText;

//   if (number1 === number2) {
//     headerText = 'Draw!';
//   } else if (number1 > number2) {
//     headerText = 'Player 1 Wins!';
//     alert('1');
//   } else if (number1 < number2) {
//     headerText = 'Player 2 Wins!';
//   }
//   return headerText;
// }

// document.querySelector('.container h1').innerHTML = headerText(
//   randomNumber1(),
//   randomNumber2()
// );

// OPTION FROM THE COURSE TO SOLVE THE CHELLANGE
////////////////////////////////////////////////

var randomNamber1 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage = 'dice' + randomNamber1 + '.png';
var randomImageSource = './images/' + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNamber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource2 = './images/dice' + randomNamber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

if (randomNamber1 > randomNamber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if (randomNamber1 < randomNamber2) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩';
} else {
    document.querySelector('h1').innerHTML = 'Draw!';
}