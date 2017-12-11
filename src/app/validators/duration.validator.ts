import { FormControl } from "@angular/forms";

export function validateDuration(ctrl:FormControl){
    const valid = false;
    return valid ? null : {validateDuration:{valid:false}}
}