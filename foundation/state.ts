import type {
  IModular,
  IStaticModular
} from "../types";
import {IObject, takeState} from "@protorians/widgets";


export function mountKitStates(kit: IStaticModular, instance: IModular) {

  kit.stateful.forEach(name => {

    const initial = instance[name as keyof IModular] as IObject[ keyof IObject ]
    instance.state[name] = takeState(initial)

    Object.defineProperty(instance, name, {
      enumerable: false,
      configurable: false,
      set(value) {
        instance.state[name].set(value)
      },
      get() {
        return instance.state[name].value
      },
    })

  })

  return instance;
}