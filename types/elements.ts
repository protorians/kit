import type {IElement, IObject} from "@protorians/widgets";
import {IModular} from "./kit";


export interface IKitElement<P extends IObject> extends IElement<P>{

  kit: IModular | undefined;

}