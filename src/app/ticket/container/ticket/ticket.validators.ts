import { AbstractControl } from "@angular/forms";

export class TicketValidators {
  static checkIssueFormat(control: AbstractControl){

    if(!control.value){
      return null;
    }

    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    return valid ? null : { invalidIssueFormat: true };
  }
  static checkIssueExist(control: AbstractControl){
      const issueField = control.get('ticket.issue').value as string;
      const hasIssueClose = control.get('ticket.issueClose').value;

      return hasIssueClose && !(issueField.length > 0) ?  {invalidIssueClose: true} : null
  }
}
