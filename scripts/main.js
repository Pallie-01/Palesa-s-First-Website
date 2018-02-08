// var headingOne = document.querySelector('h1');
// // Assigning the text content of headingOne to Moreku!
// headingOne.textContent = 'My surname is Moreku!';

// var youWant = 'Sushi';
//
// if (youWant === 'Hamburger'){
//   alert("You should go to MacDonalds");
// } else if (youWant === 'pizza'){
//   alert('you should go to Debonaires');
// } else if (youWant === 'Sushi'){
//   alert ('You should go to Tataki, apparently');
// } else {
//   alert('You must just cook at home');
// }
//
// var product;
//
// function multiply(num1, num2){
//   return num1 * num2;
// }
//
// product = multiply(12, 4)
//
// alert(product)

//Area of a triangle = base * hight / 2

// function areaTriangle(b, h){
//   var area;
//   area = b * h / 2;
//   return area
// }
//
// var a = areaTriangle(13, 9)
//
// alert(a)

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/i1.jpg') {
      myImage.setAttribute ('src','images/P1.JPG');
    } else {
      myImage.setAttribute ('src','images/i1.jpg');
    }
}
var myButton = document.querySelector('button');
var headingOne = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  headingOne.textContent = 'Pallie is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  headingOne.textContent = 'Pallie is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
