import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const emailRegExp = RegExp('(?=.*[@])');
  const valid = emailRegExp.test(control.value);
  const errors:any = {
    email: {
        rules: 'doit être une adresse mail valide'
    }
  }
  return !valid ? errors : null;
}
