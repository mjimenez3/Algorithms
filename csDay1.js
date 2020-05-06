/*function addNumbers(firstNumber, secondNumber, thirdNumber) {
    while ((firstNumber + secondNumber) <= thirdNumber) {
        (firstNumber + secondNumber);
        firstNumber++
    }
}
addNumbers(1, 2, 25);*/


function first() {
    second(5);
    console.log("First!");
}
function second(num) {
    console.log(num**num);
    console.log("second!");
}
first();
setTimeout(function() {
    console.log("third");}, 0);
second(5);