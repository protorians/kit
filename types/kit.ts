import type {
  IObject,
  IWidget,
} from "@protorians/widgets";
import type {IKitStates} from "./state";
import {IActionIdentities} from "./action";
import {IKitChildren} from "./children";

export type IKitOptions = {
  identifier?: string;
  autoload?: boolean;
}

export interface IModular {

  state: IKitStates;

  action: IActionIdentities;

  child: IKitChildren;

  get options(): IKitOptions;

  // ink<P extends IAttributes, E extends IWidgetElements>(
  //   name: string,
  //   type?: keyof HTMLElementEventMap
  // ): Omit<IAttributesScope<P, E>, 'child'>;

  render<Props extends IObject>(props?: Props): IWidget<any, any>;

  // render(): IWidget<any, HTMLElement>;

}
