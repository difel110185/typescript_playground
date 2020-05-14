import {company, address} from 'faker';
import {Mappable} from "./CustomMap";

export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    color: string = 'blue';
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = company.companyName();
        this.catchPhrase = company.catchPhrase();
        this.location = {
            lat: parseFloat(address.latitude()),
            lng: parseFloat(address.longitude())
        }
    }

    markerContent(): string {
        return `
            <div>
                <h1>Company Name: ${this.companyName}</h1>
                <h3>Company Catch Phrase: ${this.catchPhrase}</h3>
            </div>
        `;
    }
}