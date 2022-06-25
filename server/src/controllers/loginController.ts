import { Request, Response, NextFunction } from "express";
import { get, controller, use, post, bodyValidator } from "./decorators";

// ? importing something from directory in TS will trigger import from index.ts file by default

// ? index.ts file acting as a proxy file just for assembling imports from different files

function logMe(req: Request, res: Response, next: NextFunction) {
  console.log("some notification");
  next();
}

@controller("/auth")
export class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response, next: NextFunction) {
    res.send(`
<form method="POST">
<div>
<label>Email</label>
<input name="email"> 
</div>
<div>
<label>Password</label>
<input name="password" type="password">
</div>
<button>Submit</button>
</form>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (
      email &&
      password &&
      email === "bsalpsingh@berrybytes.com" &&
      password === "password"
    ) {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("invalid email or password");
    }
  }

  @get("/logout")
  function(req: Request, res: Response, next: NextFunction) {
    req.session = undefined;
    res.redirect("/");
  }
}
