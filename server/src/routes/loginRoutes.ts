import { Router } from "express";
import { Request, Response, NextFunction } from "express";
// extending Request type defn to correct inconsitent req.body annotation
// replace request with RequestWithBody (extended/overridden request type defn)
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const requireAuth = (
  req: RequestWithBody,
  res: Response,
  next: NextFunction
) => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.send(`
  
  <h1>You're not permitted</h1>
  <a href='/login'>login</a>
  `);
};

// express interface for req and response obj and next
const loginRouter = Router();
loginRouter.get(
  "/logout",
  (req: RequestWithBody, res: Response, next: NextFunction) => {
    req.session = undefined;
    res.redirect("/");
  }
);
loginRouter.get(
  "/",
  (req: RequestWithBody, res: Response, next: NextFunction) => {
    if (req.session && req.session.loggedIn) {
      res.send(`login
    <div>
  

    <h1>You are logged in</h1>
    <a href='/logout'>logout</a>
    <div>
    `);
    } else {
      res.send(`login
    <div>

    <h1>You are not logged in </h1>
    <a href='/login'>login</a>
    <div>
    `);
    }
  }
);

loginRouter.post(
  "/login",
  (req: RequestWithBody, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (
      email &&
      password &&
      email === "bsalpsingh@gmail.com" &&
      password === "password"
    ) {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("invalid email or password");
    }
  }
);

loginRouter.get(
  "/login",
  (req: RequestWithBody, res: Response, next: NextFunction) => {
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
);

loginRouter.get(
  "/protected",
  requireAuth,
  (req: RequestWithBody, res: Response, next: NextFunction) => {
    res.send("welcome to the protected route");
  }
);
export { loginRouter };
