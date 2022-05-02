import { User } from "./models/user";

const someUser = new User({});
someUser.set({ id: 1 });
const user1 = new User({});
user1.set({ id: 2, name: "bishal singh", age: 34 });
// user1.save();

// console.log(someUser.get("name"));
// console.log(someUser.get("age"));
// someUser.events.on("change", () => {
//   console.log("change some data");
// });
// someUser.events.on("save", () => {
//   console.log("save some data");
// });
// someUser.events.trigger("save");

// console.log("user events", someUser.events);
// let userinfo = someUser.fetch();
// setTimeout(() => {
//   console.log("user info", someUser);
// }, 4000);
