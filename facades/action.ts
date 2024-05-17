import type {
  IAction,
  IModular,
  IStaticModular
} from "../types";


export function action(type?: IAction){

  return function (target: IModular, property: string) {

    (target.constructor as IStaticModular).actions[ property ] = type || undefined;

  }

}