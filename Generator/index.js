var button=$(`button`)
var part1=$(`.part1`)
var part2=$(`.part2`)
var randomFlavor=["Vanilla", "Cherry", "Mint", "Matcha", "Oreo", "Peanuts", "Strawberry", "Ube", "Brownie"]
var randomFlavor2=["Butterscotch", "Rasberry", "Orange", "Lychee", "Caramel", "Chocolate", "Coffee", "Mango"]
button.on("click", generate);

function generate() {
  var randomDecimal = Math.random();
    console.log(randomDecimal);
  var random = randomDecimal * randomFlavor.length;
    console.log(random);
  var final = Math.floor(random);
    console.log(final);
    $(".part1").text(randomFlavor[final]);
  console.log(randomFlavor[final]);

var randomDecimal = Math.random();
  console.log(randomDecimal);
var random = randomDecimal * randomFlavor2.length;
  console.log(random);
var final = Math.floor(random);
  console.log(final);
  $(".part2").text(randomFlavor2[final]);
console.log(randomFlavor2[final]);
}


  // var randomDecimal = Math.random();
  // var random = randomDecimal*6;
  // var final = Math.floor(random);
  // console.log(randomFlavor[final]);

// var randomDecimal() = Math.random();
// var random = randomDecimal*6;
// var final = Math.floor(random);
// console.log(randomFlavor2[final]);
