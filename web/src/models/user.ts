import { Model } from "./model";
import { Attributes } from "./attributes";
import { Eventing } from "./eventing";
import { Sync } from "./apiSync";
import { Collection } from "./collections";
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
const rootUrl = "http://localhost:3000/users/";
export class User extends Model<UserProps> {
  // if constructor is not called ..it is called behind the scenes with super()
  static buildUser(attrs: UserProps): User {
    return new User(
      new Eventing(),
      new Sync<UserProps>(rootUrl),
      new Attributes<UserProps>(attrs)
    );
  }
  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }
  setRandomAge(): void {
    this.set({ age: Math.round(Math.random() * 100) });
  }
}


console.log(User.prototype,"user prototype")