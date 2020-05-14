const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string): string => {
    return car.toUpperCase();
});

const importantDates: (Date | string)[] = [];
importantDates.push('2030-09-09');
importantDates.push(new Date());

type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
};
