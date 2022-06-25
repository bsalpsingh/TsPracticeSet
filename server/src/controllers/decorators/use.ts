import "reflect-metadata";
import { metaDataKeys } from "./metaDataKeys";
import { RequestHandler } from "express";

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    //   check for middleware array, if not found than initialize an array
    let middlewares =
      Reflect.getMetadata(metaDataKeys.middleware, target, key) || [];
    // push the recieved middleware fxn as argument to the middleware array
    middlewares.push(middleware);
    // re define this new info to the key(route handler)
    Reflect.defineMetadata(metaDataKeys.middleware, middlewares, target, key);
  };
}
