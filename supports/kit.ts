import type {
  IModular,
  IKitOptions,
  IKitStates,
  IStaticModular,
  IActions,
  IActionIdentities,
  IKitChildren,
} from "../types";
import {
  mountKit,
  sterilizedOptions,
} from "../foundation";
import {
  type IObject,
  type IWidget,
  Text,
} from "@protorians/widgets";



export class Modular implements IModular {

  state: IKitStates = {} as IKitStates;

  action: IActionIdentities = {} as IActionIdentities;

  child: IKitChildren = {}

  static id: string = 'undefined';

  static stateful: string[] = [];

  static properties: string[] = [];

  static actions: IActions = {} as IActions;

  static children: string[] = [];

  protected static defaultOptions?: IKitOptions;

  static get options(): IKitOptions {
    return sterilizedOptions(this.defaultOptions);
  }

  static set options(value: IKitOptions) {
    this.defaultOptions = value;
  }

  get options() {
    return (this.constructor as IStaticModular).options;
  }

  static autoload() {
    mountKit(this)
  }

  constructor() {
  }

  /**
   * Render Kit handler
   */
  render<Props extends IObject>(props?: Props): IWidget<any, any> {
    return Text(`No render method defined with ${JSON.stringify(props || {})} properties`);
  }

}
