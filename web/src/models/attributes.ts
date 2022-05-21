export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    //   ! we have established that the generic type K is a key of type T
    // ! the return value of the fxn is the value resolve by key K of object of type  T
    // ? type K has to be one of the keys of T... i.e the key:string acting as a type
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  getAll = (): T => {
    return { ...this.data };
  };
}
