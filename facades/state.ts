import type {IModular, IStaticModular} from "../types";

export function state() {

  return function (target: IModular, stateful: string) {

    (target.constructor as IStaticModular).stateful.push(stateful)

  }

}