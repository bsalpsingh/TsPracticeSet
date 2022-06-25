import "reflect-metadata";
import { methods } from "./methods";
import { metaDataKeys } from "./metaDataKeys";
import { RequestHandler } from "express";


interface RequestHandlerDescriptor extends PropertyDescriptor{
  value?:RequestHandler
}
export const RouterBinder = (method: string) => {
  return (path: string) => {
    return (target: any, key: string, desc: RequestHandlerDescriptor) => {
     
      Reflect.defineMetadata(metaDataKeys.path, path, target, key);
      Reflect.defineMetadata(metaDataKeys.method, method, target, key);
    };
  };
};

export const get = RouterBinder(methods.get);
export const put = RouterBinder(methods.put);
export const patch = RouterBinder(methods.patch);
export const post = RouterBinder(methods.post);
export const del = RouterBinder(methods.del);
