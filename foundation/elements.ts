import {WidgetElement, IObject} from "@protorians/widgets";
import type {IModular, IKitElement} from "../types";

export class KitElement<P extends IObject> extends WidgetElement<P> implements IKitElement<P> {

  kit: IModular | undefined;

}