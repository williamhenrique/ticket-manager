import { AbstractControl } from "@angular/forms";

export class TicketValidators {
  static checkIssueFormat(control: AbstractControl){
    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    return valid ? null : { invalidIssueFormat: true };
  }
}
