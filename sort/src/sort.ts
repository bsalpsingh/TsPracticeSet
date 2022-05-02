export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  //? the abstract keyword tell the abstract class that these methods
  //? or properties exist in future(implemented by child class)
  // ! all the child class extending from Sorter Class must implement above abstract signautres(values)

  // * abstract class allow us to write methods ... which can refer to the values that exist on child classes
  // * thereby allowing inheriting a fxn to all classes and compliying with DRY
  // ? abstract classes are tighly binded with their child classes...(contractual inheritance)
  

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        // comparison logic for the data  structures
        //? is the  sortable data strucuture
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
