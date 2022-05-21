import { UserForm } from "./views/userForm";
let parentElement: Element = document.getElementById("root");
let userForm = new UserForm(parentElement);
userForm.render();
