import { FormControl } from '@angular/forms';

export function validateUrl(control: FormControl) {
  if (!control.value.startsWith('B')) {
    return { validateUrl:{valid: true }};
  }
  return null;
}