import {IModular, IKitElement, IStaticModular} from "../types";
import {IObject} from "@protorians/widgets";


export function mountKitProperties<P extends IObject>(
  kit: IStaticModular,
  instance: IModular,
  element: IKitElement<P>
) {
  kit.properties.forEach(property =>
    // @ts-ignore
    instance[property as keyof IModular] = (element.props[property as keyof P])
      || (instance[property as keyof IModular] as IModular[keyof IModular])
  )
  return instance;
}