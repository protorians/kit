import type {
  IAction,
  IModular,
  IKitElement,
  IKitProps,
  IStaticModular
} from "../types";
import {
  createContext,
  type IAttributes,
  type IAttributesScope,
  type IObject,
  type IWidgetElements,
} from "@protorians/widgets";
import {target} from "@protorians/sensus";


export function actionable<P extends IAttributes, E extends IWidgetElements>(
  component: IStaticModular,
  name: string,
  type?: IAction,
): Omit<IAttributesScope<P, E>, 'child'> {
  const ns: IObject = {}
  ns[component.id] = {action: {$: `${name}`, type: type || 'click'}}
  return {ns} as Omit<IAttributesScope<P, E>, 'child'>;
}


export function mountKitActions<P extends IKitProps>(
  kit: IStaticModular,
  instance: IModular,
  element: IKitElement<P>
) {

  Object.entries(kit.actions).map(({0: method, 1: types}) => {

    const actions: Partial<(keyof HTMLElementEventMap)[]> = [];

    (Array.isArray(types) ? types : [types]).forEach(type => {
      if (!actions.includes(type)) actions.push(type || 'click')
    })

    actions.forEach(type => {
      instance.action[method] = actionable(kit, method, type)

      element.signal.listen('connected', () => {

        target(`[${kit.id}\\:action*="${method}"][${kit.id}\\:action\\:type*="${type||'click'}"]`, element)
          .forEach(handler => {
            handler.addEventListener(type||'click', ev => {

              const callback = instance[ method as keyof typeof instance];
              if(typeof callback == 'function' && element.widget) callback.bind(instance)(createContext({
                widget: element.widget,
                component: element.widget?.component,
                event: ev
              }))

            })
          })

      })

    })

    return actions;
  })

  return instance;
}

//
// export function mountKitAction() {
//
// }