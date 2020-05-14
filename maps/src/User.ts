import {name, address} from 'faker';
import {Mappable} from "./CustomMap";

export class User implements Mappable{
    name: string;
    color: string = 'red';
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = name.firstName();
        this.location = {
            lat: parseFloat(address.latitude()),
            lng: parseFloat(address.longitude())
        }
    }

    markerContent(): string {
        return `
            <div>
                <h1>User Name: ${this.name}</h1>
            </div>
        `;
    }
}