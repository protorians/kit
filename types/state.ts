import {
  IDataValue,
  WidgetState
} from "@protorians/widgets";

export type IKitStates = {
  [K: string]: IKitState
}

export type IKitState = WidgetState<IDataValue>