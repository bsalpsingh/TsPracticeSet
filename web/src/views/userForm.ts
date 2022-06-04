import { User, UserProps } from "./../models/user";
import { View } from "./views";
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.setRandomAge,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };
  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    const name = input.value;

    if (name) {
      this.model.set({ name });
    }
  };
  setRandomAge = (): void => {
    this.model.setRandomAge();
  };
  onMouseEnter(): void {
    console.log("hi ... H1 being hovered on ");
  }

  template(): string {
    return `
        <div>
        <input placeholder=${this.model.get("name")} />
         <button class="set-name">Set Name</button>
        <button class="set-age">Set Random Age</button>
      <button class="save-model">save</button>
        </div>
        `;
  }
}
