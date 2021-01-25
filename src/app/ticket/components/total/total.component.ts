import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
  @Input() parent: FormGroup;
  total = 0;
  constructor() { }

  ngOnInit() {
    const comments = (this.parent.get('comment.comments') as FormArray);
    comments.valueChanges.subscribe(() => {
      this.total = (comments.value as []).length ;
    })
  }

}
