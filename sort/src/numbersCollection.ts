import { Sorter } from "./sort";
export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  //* child class implementing all the abstract definations

  get length(): number {
    return this.data.length;
  }

  // comparion logic
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  //  swap logic
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
