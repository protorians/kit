import type {IKitProps, IStaticModular} from "../types";
import {Component} from "@protorians/widgets";
import {kitIdentifier} from "../utilities";
import {mountKitProperties} from "./props";
import {mountKitStates} from "./state";
import {KitElement} from "./elements";
import {mountKitActions} from "./action";
import {mountKitChildren} from "./children";


export function mountKit(kit: IStaticModular) {

  customElements.define(
    kit.options.identifier || kitIdentifier((new kit).constructor.name),

    class extends KitElement<IKitProps> {

      bootstrap(): this {

        this.kit = new kit;

        this.use = Component(this.kit.render.bind(this.kit));

        this.setAttribute(`kit:${kit.id}`, '')

        mountKitProperties(kit, this.kit, this)

        mountKitStates(kit, this.kit)

        mountKitActions<IKitProps>(kit, this.kit, this)

        mountKitChildren(kit, this.kit, this)

        return this;

      }

    }
  );


}