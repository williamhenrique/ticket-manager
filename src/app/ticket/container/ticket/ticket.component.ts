import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TicketValidators } from './ticket.validators';
import { UsersService } from '../../../core/services/users.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  form = new FormGroup({
    ticket: new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      issue: new FormControl('', [TicketValidators.checkIssueFormat]),
      issueClose: new FormControl(false)
    }),
    assign: this.fb.group({
      user_email: this.fb.control('', [Validators.email], [this.validateUserExist.bind(this)])
    }),
    comment: this.fb.group({
      text: this.fb.control('', [Validators.required]),
      comments: this.fb.array([])
    })
  }, { validators: TicketValidators.checkIssueExist })

  constructor(private fb: FormBuilder, private user: UsersService) { }

  ngOnInit() {

  }

  add() {
    const text = this.form.get('comment.text') as FormControl;
    const comments = this.form.get('comment.comments') as FormArray;
    comments.push(this.createComment(text.value));
    text.reset()

  }

  createComment(value) {
    return this.fb.group({
      comment_text: this.fb.control(value),
    })
  }

  remove(index) {
    const control = this.form.get('comment.comments') as FormArray;
    control.removeAt(index);
  }

  resetForm() {
    this.form.reset();
    // // this.form.setValue({
    // //   ticket: {
    // //     title: '',
    // //     description: ''
    // //   },
    // //   assign: {
    // //     user_id: ''
    // //   },
    // //   comment: {
    // //     text: '',
    // //     comments: []
    // //   }
    // // })
    // this.form.patchValue({
    //   ticket: {
    //     title: ''
    //   }
    // })
  }

  required(field: string, form: string) {
    return (
      this.form.get(`${form}.${field}`).hasError('required') &&
      (this.form.get(`${form}.${field}`).touched || this.form.get(`${form}.${field}`).dirty)
    )
  }

  get invalidIssue() {
    return (
      this.form.get('ticket.issue').hasError('invalidIssueFormat') &&
      this.form.get('ticket.issue').dirty &&
      !this.required('issue', 'ticket')
    );
  }

  get invalidCloseIssue() {
    // console.log('invalid', this.form.hasError('invalidIssueClose'));
    return (
      this.form.hasError('invalidIssueClose')
    );
  }

  get invalidEmailExist() {
    return (
      this.form.get('assign.user_email').hasError('invalidEmailExist') &&
      this.form.get('assign.user_email').dirty
    );
  }

  validateUserExist(control: AbstractControl) {
    console.log(control.value)
    return this.user.getUserByEmail(control.value).pipe(
      map((response: []) => {
        console.log( response.length > 0 ? null : { invalidEmailExist: true })
        return response.length > 0 ? null : { invalidEmailExist: true }
      })
    )
  }

}
