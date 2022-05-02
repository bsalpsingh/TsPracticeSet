//  a class is a blue print to create some object
class Vehicle {
  constructor(public color: string) {}

  // |  above constructor logic is equvalent to
  // |   below constructor logic
  // V

  //   constructor(color: string) {
  //     this.color = color;
  //   }

  //  the concept of modifiers also hold true for variables in a class
  protected drive(): void {
    console.log("chugga chugga");
  }

  protected honk(): void {
    console.log("beep beep");
  }
  //  private methods cannot be over ridden but protected methods can
  // modifiers cannot be altered while over riding
}

const vehicle = new Vehicle("orange");

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  /* 
  ?if in a sub class the constructur fxn is not called then then the super class constructor is invoked
  ? by default
  *   however if the constructor is called then the  superclasse's
  *   consturctuor must also be invoked ...which can be achieved by
  *    calling super ...(super is a reference (alias to the parent class consturctor))
*/
  protected drive(): void {
    console.log("vroom vroom ");
  }
  startDrivingProcess(): void {
    this.drive();
  }
  protected honk(): void {
    console.log("PEEP");
  }
  startHonk(): void {
    this.honk();
  }
}

const car = new Car(4, "red");
