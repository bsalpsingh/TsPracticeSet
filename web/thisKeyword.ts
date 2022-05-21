// in reuglar fxn this = caller obejct
// in arrow fxn
//  arrow fxn as a method of regular obj .... possibly undnefined
// arrow fxn as a method of class object(instance)  ....  this === object instance
// arrow fxns inside a method (method that is a regular fxn) this=== the caller of  method

//  this with regular fxns

// function demoThisRegularGlobal() {
//   // captures global object

//   console.log(this, "captures global scope in global regular fxns");
// }
// demoThisRegularGlobal();

// this.name = "bishal";

// const demoThisArrowGlobal = () => {
// captures parent scope in js and export modules it ts

//   console.log(this, "captures parent scope in js and export modules in ts");
// };

// demoThisArrowGlobal();

// inside class instances
abstract class SomeAbstract {
  abstract demoThisRegularInstance(): void;
  intro = (): void => {
    console.log(" i am an abstract class");
  };
}
class DemoThis extends SomeAbstract {
  // the inits from constructor fxns properties init out side the constructor
  //  are embedded/persisted in the class instance
  // the regular fxns are offloaded to the prototype memory space
  //  when an instance is created ...this keyword is set to the object instance itself
  firstName: string = "something";
  lastName: string = "something";

  constructor() {
    super();
    this.firstName = "bishal";
    this.lastName = "singh";
  }

  demoThisRegularInstance() {
    console.log(this);
  }

  demoThisArrowInstance = () => {
    console.log(this);
  };
}
let demo = new DemoThis();

class Inherit extends DemoThis {
  firstName: string = "jharna";
  childLastName: string = "something";
  constructor() {
    super();
  }
  demoThisArrowInstance = () => {
    console.log(this, "this is a child class");
  };
}

// obeservations
let arrowFxnInstance = demo.demoThisArrowInstance;
let regularFxnInstance = demo.demoThisRegularInstance;

arrowFxnInstance(); // returns the class instance (the return values excludes the regular fxns)
regularFxnInstance(); // returns undefined

// from observations it is evident that ...
//? . 1 ) only the regular fxns are offloaded to prototype memory space ...he
// hence this keyword identifies the object by looking at whose calling the fxn
//   none of the objects own the regular fxns in prototype ..it is common to all
// there fore it is important to resolve the object using method...this is done looking
// at the caller of the prototype method
//?  .2)  the arrow fxns are persisted to the instance
// therefore not requiring to resolve the object...since its is embedded in the object itself
// since the arrow fxns are embedded to the respective instances ...there is no need of resolving
//  the objects... it is well known already which object may call this method...(the owner object)

//! You should avoid using arrow functions in class unless we donot
//  wish to see ambigious values of this keyword (if not utilzing this keyword do not use arrow fxns)
// as they won't be the part of prototype
// and thus not shared by every instance. It is same as giving the same copy
// of function to every instance
const child = new Inherit();
child.demoThisArrowInstance();
