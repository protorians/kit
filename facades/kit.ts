import {IKitOptions, IStaticModular} from "../types";
import {kitId} from "../utilities";


export function kit(options?: IKitOptions | undefined) {

  return function (target: IStaticModular) {

    target.id = kitId(target.name)

    target.options = options || {};

    if (target.options.autoload) target.autoload()

  }

}