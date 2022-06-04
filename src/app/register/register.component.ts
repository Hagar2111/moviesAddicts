import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = 'registerForm';

  error:string ='';
  constructor(private _AuthService:AuthService, private _Router:Router) {

  }


    registerForm = new FormGroup ({

    first_name: new FormControl(null, [Validators.pattern('^[A-Z][a-z]{2,10}$'),Validators.minLength(3), Validators.maxLength(10), Validators.required]),

    last_name: new FormControl(null, [Validators.pattern('^[A-Z][a-z]{2,10}$'), Validators.minLength(3), Validators.maxLength(10), Validators.required]),

    age: new FormControl(null, [Validators.min(16), Validators.max(80), Validators.required]),

    email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(
      '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
    )]),

    password: new FormControl(null, [Validators.required, Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    )]),

  });

  submitRegisterForm(registerForm:FormGroup){

    this._AuthService.register(registerForm.value).subscribe((response)=>{

      if(response.message == 'success')
      {
        this._Router.navigate(['/login'])
      }
      else
      {
        this.error = response.errors.email.message
      }
    })
  }

  ngOnInit(): void {

  }
}
