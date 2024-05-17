import {IWidget} from "@protorians/widgets";

export type IKitChildren = Partial<{
  [K : string]: IWidget<any, any>;
}>