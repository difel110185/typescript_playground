export class Attributes<T> {
    constructor(private data: T) {}

    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key]
    };

    set = (updatedProps: T): void => {
        // @ts-ignore
        Object.assign(this.data, updatedProps)
    };

    getAll(): T {
        return this.data;
    }
}