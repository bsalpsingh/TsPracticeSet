import "reflect-metadata";
import { methods } from "./methods";
import { metaDataKeys } from "./metaDataKeys";
import { AppRouter } from "../../AppRouter";
import { RequestHandler, Response, Request, NextFunction } from "express";

function bodyValidator(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    // if found next else send some error to client
console.log(req.body,"body")
    if (!req.body) {
      res.status(422).send(`missing property`);
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`missing property ${key}`);
        return;
      }
    }
    return next();
  };
}

export const controller = (routePrefix: string) => {
  // using single ton router
  const router = AppRouter.getInstance();

  return (target: Function) => {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      // methods and paths bound to request handlers
      const path = Reflect.getMetadata(
        metaDataKeys.path,
        target.prototype,
        key
      );

      const method: methods = Reflect.getMetadata(
        metaDataKeys.method,
        target.prototype,
        key
      );

      // find the validator arguments and pass them one by one in loop

      // find the middlewares array
      const middlewares: RequestHandler[] =
        Reflect.getMetadata(metaDataKeys.middleware, target.prototype, key) ||
        [];

      const requiredBodyProps: string[] =
        Reflect.getMetadata(metaDataKeys.validator, target.prototype, key) ||[]
      if (requiredBodyProps.length > 0) {
        middlewares.push(bodyValidator(requiredBodyProps));
      }
       
    

      if (path) {
        console.log(`${routePrefix}${path}`);
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);

        // const routeMap = router.route(`${routePrefix}${path}`);
        // routeMap[method];
      }
    }
  };
};
