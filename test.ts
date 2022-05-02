class Person {
  constructor(public name: string, public age: number,public role:string) {}
  public printDetails(): void {
    console.log(`a person of name ${this.name} and age ${this.age}`);
  }
}

class Cricketer extends Person {
 
  public printDetails(): void {
    console.log(`a ${this.role} of name ${this.name} and age ${this.age}`);
  }
}

let spdSmith = new Cricketer("Steve Smith", 32,"Batsman");

spdSmith.printDetails();
