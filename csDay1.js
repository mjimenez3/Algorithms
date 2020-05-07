//VET WHO CODE

/*function addNumbers(firstNumber, secondNumber, thirdNumber) {
    while ((firstNumber + secondNumber) <= thirdNumber) {
        (firstNumber + secondNumber);
        firstNumber++
    }
}
addNumbers(1, 2, 25);*/

// Call Stack Example
/*function first() {
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
second(5);*/

//Call Stack Example
/*function AStack() {
    BStack(10);
    console.log("this is A Stack");
}
function BStack(k) {
    console.log(k + k);
    console.log("this is b stack");
}
AStack();
console.log("this is C Stack");
BStack(9);*/


//Recursive Example
/*function TimeToLaunch(num) {
    if (num <= 0) {
        console.log("Blast Off!");
        return;
    }
    console.log(num);
    num--;
    TimeToLaunch(num);
}
TimeToLaunch(10);*/
