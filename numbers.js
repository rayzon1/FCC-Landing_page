/* equation generator FCC */

operand1 = prompt('Please provide a number: ');
numOne = parseFloat(operand1);
operand2 = prompt('Please provide a number: ');
numTwo = parseFloat(operand2);
add = numOne + numTwo;
multiply = numOne * numTwo;
divide = numOne / numTwo;
alert('Press return for results.');
addSolution = "<h2>" + numOne + " + " + numTwo + " = " + add + "</h2>";
multSolution = "<h2>" + numOne + " * " + numTwo + " = " + multiply + "</h2>";
divSolution = "<h2>" + numOne + " / " + numTwo + " = " + divide + "</h2>";
document.write('<h1>Let\'s do some math!</h1><br>');
document.write(addSolution + "<br>");
document.write(multSolution + "<br>");
document.write(divSolution + "<br>");
