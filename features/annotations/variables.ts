let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['ref', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

class Car {}
let car: Car = new Car();

let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

const logNumber: (i: number) => void = (i) => {
    console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coords: {x: number, y: number} = JSON.parse(json);
console.log(coords);

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i< words.length; i++)
    if (words[i] === 'green')
        foundWord = true;

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i< numbers.length; i++)
    if (numbers[i] > 0)
        numberAboveZero = numbers[i];
