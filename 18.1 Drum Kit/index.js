function handleClick() {
  alert('I got click!');
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

