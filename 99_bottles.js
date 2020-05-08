/*function bottles() {
    for (let num = 99; num >= 0; num++) {
      
        while (num >= 1) {
            console.log(num + " bottles of beer on the wall, " + num + " bottles of beer, you take one down and pass it around, " + num + " bottles of beer on the wall!");
            num--;
        } return}
    }
bottles();*/

function bottles(n) {
    if (n <= 0) {
        console.log("Go to sleep, You're Drunk!");
        return;
    } 
    console.log(n + " bottles of beer on the wall, " + n + " bottles of beer, you take one down and pass it around, " + n + " bottles of beer on the wall!");

    n--;
    bottles(n);
}
bottles(10);

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
