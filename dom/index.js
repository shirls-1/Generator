var greetings = document.querySelector('.greetings');
console.log(greetings)

var firstName = document.querySelector('.name');
console.log(firstName)

var question = document.querySelector('.question');
console.log(question)

var submit = $('.submit');

submit.on("click", getNameAndLogToConsoles);

function getNameAndLogToConsoles () {
  var name = $('.text') .val ();
  console.log(name);
  message.text(name);
}

var button = $('button');

button.on("click", printText);

function printText(){
  console.log("Hope you have a good day")
}



// var change = $('button');
//
// change.on('click', changeColor);
//
// function changeColor() {
//   console.log('The button was clicked.')
//   button.toggleClass('pink');
//   button.toggleClass('hide');
//   button.toggleClass('two');
// }

var hide = $('hide');

hide.on('click', doSomething)

function doSomething() {
  console.log('The button was clicked.')
}
