import { Eventing } from "./eventing";
import { Sync } from "./sync";
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
const rootUrl = "http://localhost:3000";
export class User {
  public events: Eventing = new Eventing();

  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
