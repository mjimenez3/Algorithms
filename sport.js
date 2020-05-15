let sport = '';

class sports {
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

let num1 = new sports('John', 'Dodgers', 'Steelers', 'Lakers');
let mike = new sports('mike', 'angels', 'rams', 'clippers');
let samuel = new sports('samuel', 'padres', 'patriots', 'warrior');
num1.print();
mike.print();
samuel.print();
