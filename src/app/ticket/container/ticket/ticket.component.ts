import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketValidators } from './ticket.validators';

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
      issue: new FormControl('', [TicketValidators.checkIssueFormat])
    }),
    assign: this.fb.group({
      user_id: this.fb.control('123')
    }),
    comment: this.fb.group({
      text: this.fb.control('', [Validators.required]),
      comments: this.fb.array([])
    })
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form.valueChanges.subscribe(() =>{
      console.log(this.form.touched)
    })
  }

  add(){
    const text = this.form.get('comment.text') as FormControl;
    const comments = this.form.get('comment.comments') as FormArray;
    comments.push(this.createComment(text.value));
    text.reset()

  }

  createComment(value){
    return  this.fb.group({
      comment_text: this.fb.control(value),
    })
  }

  remove(index){
    const control = this.form.get('comment.comments') as FormArray;
    control.removeAt(index);
  }

  resetForm(){
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

  required(field: string, form: string){
    return (
      this.form.get(`${form}.${field}`).hasError('required') &&
      (this.form.get(`${form}.${field}`).touched || this.form.get(`${form}.${field}`).dirty)
    )
  }

}
