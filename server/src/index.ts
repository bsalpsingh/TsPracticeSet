import express from "express";

import bodyParser from "body-parser";
import cookieSession from "cookie-session";
const app = express();

import { AppRouter } from "./AppRouter";

//? invoking the code in login controller i.e mapping routes to handlers in singleton app router
import './controllers/rootController'
import "./controllers/loginController";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["somerandomstring"] }));
app.use(AppRouter.getInstance());


app.listen(3000, (): void => {
  console.log("listening on port 3000");
});
