import { faker } from "@faker-js/faker";
import { Mappable } from "./customMap";
export class User implements Mappable {
  // annotations
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  // initialization
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `Hello, I'm ${this.name}`;
  }
  color: "red";
}
