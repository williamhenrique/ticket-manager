import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: this.fb.control(''),
    password: this.fb.control(''),
  })

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    const {email, password} = this.form.value;
     this.auth.login({email, password}).subscribe(() => {
       this.router.navigate(['/'])
     })
  }

}
