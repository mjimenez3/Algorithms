let sport = '';

class Sports {
    constructor (name, baseball, football, basketball) {
        this.name = name;
        this.baseball = baseball;
        this.football = football;
        this.basketball = basketball;
    }
    toString() {
        return `My name is ${this.name}, I like the ${this.baseball}, ${this.football}, and the ${this.basketball}`
    }
    print() {
        console.log(this.toString());
    }
}

let num1 = new Sports('John', 'Dodgers', 'Steelers', 'Lakers');
let mike = new Sports('mike', 'angels', 'rams', 'clippers');
let samuel = new Sports('samuel', 'padres', 'patriots', 'warrior');

num1.hockey = ('kings');
console.log(num1);
delete num1.hockey;
console.log(num1);
delete num1.baseball;
console.log(num1);

num1.print();
mike.print();
samuel.print();
