import type {
  IModular,
  IStaticModular
} from "../types";

export function property() {

  return function (target: IModular, stateful: string) {

    (target.constructor as IStaticModular).properties.push(stateful)

  }

}