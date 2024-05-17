import {Modular} from "./supports";
import {IStaticModular} from "./types";
import {IAttributes, IContextuable, IWidgetElements} from "../widgets";


export * from "./types"
export * from "./facades"
export * from "./supports"
export * from "./foundation"

export default class Kit{

  static Modular: IStaticModular = Modular

}

export type IKitContext<A extends IAttributes, E extends IWidgetElements> = IContextuable<A, E>

export type IKitCommonContext = IKitContext<IAttributes, HTMLElement>