import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: this.fb.control(''),
    email: this.fb.control(''),
    password: this.fb.control(''),
  })

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
  }

  register(){
    const {name, email, password } = this.form.value;
     this.auth.register({name, email, password}).subscribe(() => {

     })
  }
}
