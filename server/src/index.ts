import express from "express";
import { loginRouter } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({keys:["somerandomstring"]}))
app.use(loginRouter);
app.listen(3000, (): void => {
  console.log("listening on port 3000");
});
