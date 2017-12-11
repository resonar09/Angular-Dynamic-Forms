import { FormControl } from '@angular/forms';

export function validateEnds(control: FormControl) {
  if (!control.value.endsWith('B')) {
    return { validateEnds:{valid: true }};
  }
  return null;
}