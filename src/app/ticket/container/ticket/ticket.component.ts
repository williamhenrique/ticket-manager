import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
    assign: new FormGroup({
      user_id: new FormControl('123')
    }),
    comment: new FormGroup({
      text: new FormControl(''),
      comments: new FormArray([])
    })
  })
  constructor() { }

  ngOnInit() {
  }

  add(){
    const text = this.form.get('comment.text') as FormArray;
    const comments = this.form.get('comment.comments') as FormArray;
    comments.push(this.createComment(text.value));
    text.reset()
  }

  createComment(value){
    return  new FormGroup({
      comment_text: new FormControl(value),
    })
  }

  remove(index){
    const control = this.form.get('comment.comments') as FormArray;
    control.removeAt(index);
  }

}
