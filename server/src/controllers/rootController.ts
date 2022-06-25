import { Request, Response, NextFunction } from "express";
import { get, controller, use, post, bodyValidator } from "./decorators";
const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.send(`
    
    <h1>You're not permitted</h1>
    <a href='/login'>login</a>
    `);
};

@controller("")
export class RootController {
  @get("/")
  fucntion(req: Request, res: Response, next: NextFunction) {
    if (req.session && req.session.loggedIn) {
      res.send(`login
        <div>
      
    
        <h1>You are logged in</h1>
        <a href='/auth/logout'>logout</a>
        <div>
        `);
    } else {
      res.send(`login
        <div>
    
        <h1>You are not logged in </h1>
        <a href='/auth/login'>login</a>
        <div>
        `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response, next: NextFunction) {
    res.send("welcome to the protected route");
  }
}
