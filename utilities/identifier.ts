import {decamelize} from "@protorians/widgets/utilities/camelization";


export function kitIdentifier(name: string) {

  name = kitId(name)

  name = !name.includes('kit') ? `kit-${name}` : name;

  return name

}


export function kitId(name: string) {

  return decamelize(name)

    .replace(/-kit/, '')

    .replace(/kit-/, '')

    .replace(/-kit-/, '')

    ;

}