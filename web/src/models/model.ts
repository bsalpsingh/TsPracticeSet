import { AxiosPromise, AxiosResponse } from "axios";

// constraint interfaces
interface hasId {
  id?: number;
}
type callBack = () => void;

// sub module interfaces

interface ModelAttributes<T> {
  //? LIKE FXNS & CLASSES , INTERFACES CAN ALSO BE GENERIC
  //   data: T;
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(update: T): void;
}

interface Sync<T> {
  rootUrl: string;
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  events: { [key: string]: callBack[] };
  on(eventName: string, callBack: callBack): void;
  trigger(eventName: string): void;
}

export class Model<T extends hasId> {
  constructor(
    //  the code here is highest in order of operations
    //   shortened syntax for getter do not pose problems since all the initalizations are
    //    done ahead of time
    private events: Events,
    private sync: Sync<T>,
    private attributes: ModelAttributes<T>
  ) {
    //    the code here is lower in order of operations
    //   donot use shotened syntax for getters if values are initialzed here
  }

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  //   get on() {
  //     return this.events.on;
  //   }

  //   get trigger() {
  //     return this.events.trigger;
  //   }

  //   get get() {
  //     return this.attributes.get;
  //   }
  set(update: T) {
    this.attributes.set(update);
    this.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error(
        "cannot fetch without id... user may not exist on backend"
      );
    }
    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }

  save(): void {
    let data: T = this.attributes.getAll();
    this.sync
      .save(data)
      .then(({ data }: AxiosResponse): void => {
        this.trigger("Save");
      })
      .catch((error) => {
        console.log(error);
        this.on("Error", () => {
          console.log("Error saving data", data);
        });
        this.trigger("Error");
      });
  }
}
