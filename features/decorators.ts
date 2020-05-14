@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `This boat color is ${this.color}`;
    }

    @logError('WOW look at the boat sinking!')
    pilot(@parameterDecorator speed: string): void {
        if (speed === 'high')
            console.log('swish');
        else
            console.log('swash');
    }
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(target);
    console.log(key);
    console.log(index);
}

function testDecorator(target: any, key: string) {
    console.log(target);
    console.log(key);
}

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        desc.value = function() {
            try {
                method();
            }
            catch (e) {
                console.log(errorMessage);
            }
        }
    }
}