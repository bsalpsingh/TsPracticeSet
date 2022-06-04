@classDecorator
class Boat {
  color: string = "red";
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("the boat has sunk in ocean")
  pilot(
    @parameterDecorator someparam1: string,
    @parameterDecorator someParam2: string
  ): void {
    throw new Error();
    console.log("swish");
  }
}
// class decorators take reference to class constructor fxn as arg
function classDecorator(constructor: typeof Boat) {
  //  type of ClassName is reference to its constructor fxn 
  //  we can also annotate constructor as a fxn
  console.log(
    `msg from class Decorator --> the constructor fxn reference `,
    constructor
  );
}

// parameter decorators take index of parameter instead of propertyDescriptor as 3rd arg
function parameterDecorator(target: Boat, key: string, parameterIndex: number) {
  console.log(
    `msg from parameter decorator--> the key ${key} and the  parameter index is ${parameterIndex}`
  );
}

function logError(errorMessage: string) {
  //? exposing the error Message to decorator fxn using closure
  //? i.e logError returns a decorator fxn

  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = () => {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

// const boat = new Boat().pilot("bsihal", "singh");
