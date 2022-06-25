import "reflect-metadata";
import { metaDataKeys } from "./metaDataKeys";

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(metaDataKeys.validator, keys, target, key);
  };
}
