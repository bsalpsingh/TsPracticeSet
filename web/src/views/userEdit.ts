import { View } from "./../views/views";
import { User, UserProps } from "../models/user";
import { UserShow } from "./userShow";
import { UserForm } from "./userForm";
export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      userForm: ".user-form",
    };
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }
  template(): string {
    return `
    <div class='user-show'></div>
     <div class='user-form'></div>
    
        `;
  }
}
