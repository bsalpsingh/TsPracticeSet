import { UserEdit } from "./views/userEdit";
import { User } from "./models/user";

const user = User.buildUser({ name: "Bishal Singh", age: 24 });
let parentElement: Element = document.getElementById("root");
if (parentElement) {
  let userEdit = new UserEdit(parentElement, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error("Root element not found ");
}
