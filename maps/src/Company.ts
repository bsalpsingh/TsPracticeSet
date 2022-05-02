import { faker } from "@faker-js/faker";
import { Mappable } from "./customMap";
//? interfaces are exportable
//? we can require a  class to satisfy a particular interface using implements
//?  for additional type checking
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
    <h1>${this.companyName}</h1>
    <h2>${this.catchPhrase}</h2>
    </div>
    
    `;
  }
  color: "blue";
}
