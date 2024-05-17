import type {IKitElement, IKitProps, IModular, IStaticModular} from "../types";
import {createContext} from "@protorians/widgets";


export function mountKitChildren<P extends IKitProps>(
  kit: IStaticModular,
  instance: IModular,
  element: IKitElement<P>
) {

  kit.children.forEach(childName => {
    if (typeof instance[childName] == 'function') {
      instance.child[childName] = instance[childName].bind(instance)(createContext({
        // @ts-ignore
        widget: element.widget,
        component: element.widget?.component,
      }))
    }
  })

  return instance;
}