import type {
  IModular,
  IStaticModular
} from "../types";

export function child() {

  return function (target: IModular, childName: string) {

    (target.constructor as IStaticModular).children.push(childName)

  }

}