//VETS WHO CODE

//constant time!!! O(1)
/*function oneTime() {
    console.log("One Time, Every Time!");
}
oneTime();*/

//Linear Time, O(n)
/*function asManyAsNeeded(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i * i);
    }
}
asManyAsNeeded(10);*/

//Polynomial Time O(n^2)
/*function quadExample() {
    for (let outer = 0; outer < elements.Count; outer++) {
        for (var inner = 0; inner < elements.Count; inner++) {
           
            if (outer == inner) continue;
            if (elements[outer] == elements[inner]) return true;
        }
    }
    return false;
}*/


// random funtion
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
