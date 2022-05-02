interface reportable {
  summary(): string; // expressing fxns as type
}
// an interface guarantees that a given obj has the properties specified by interface

const oldCivic = {
  carName: "civic",
  year: 2000,
  broken: true,
  summary: (): string =>
    `the car is ${this.carName} , built in ${this.year} , is ${
      this.broken ? "not" : null
    } functional`,
};

const pepsi = {
  color: "orange",
  sugar: 30,
  carbonated: false,

  summary: (): string =>
    `the color is ${this.color} , sugar content is ${this.sugar} , is ${
      this.broken ? "not" : null
    } carbonated`,
};

const printReport = (item: reportable): void => {
  console.log(item.summary());
};

// ? multiple objects can have same interface...i.e these objects have  property in common
//  that follow same rules... this implies ... we can pass very different objects to a fxn
// that is in accordance with the interface defined by fxns... thus the fxns can become generic
//  that can work with the property defined by interface ....like above summary fxns that may do very
// different things
