import { User } from "./user";
import { Eventing } from "./eventing";
import axios, { AxiosPromise, AxiosResponse } from "axios";
import { UserProps } from "./user";
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();
  constructor(public url: string, public deserialized: (json: K) => T) {}
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  fetch() {
    axios.get(this.url).then((response: AxiosResponse) => {
      response.data.forEach((user: K) => {
        this.models.push(this.deserialized(user));
      });
    });
    this.trigger("change");
  }
}
