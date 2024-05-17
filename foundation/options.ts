import type {IKitOptions} from "../types";


export function sterilizedOptions(options?: IKitOptions): IKitOptions{

  options = options || {} as IKitOptions

  return {
    ...options,
    autoload: typeof options.autoload == 'undefined' ? true: options.autoload,
  }

}