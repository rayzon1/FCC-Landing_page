// declare program variables
var num1;
var num2;

// announce the program
alert("Let's do some math!");

// collect numeric input
num1 = prompt("Please type a number");
num1 = parseFloat(num1);
num2 = prompt("Please type another number");
if (parseInt(num2) === 0) {
  alert('Sorry, you cannot divide by ' + num2 + ', reload and try again.');
  break;
}
num2 = parseFloat(num2);
if (isNaN(num1) || isNaN(num2)) {
  alert('Sorry, one or more inputs is not a number. Reload and try again.');
  break;
}
// build an HTML message
var message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);
  
// write message to web page
document.write(message);

