import type {
  IAttributes,
  IAttributesScope,
  IWidgetElements
} from "@protorians/widgets";

export type IAction = keyof HTMLElementEventMap | (keyof HTMLElementEventMap)[]

export type IActions = {
  [Property: string]: IAction | undefined
}

export type IActionIdentity<P extends IAttributes, E extends IWidgetElements> = Omit<IAttributesScope<P, E>, 'child'>

export type IActionIdentities = {
  [Property: string]: IActionIdentity<any, any>
}