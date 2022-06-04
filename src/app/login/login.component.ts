import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title ='material-login';

  error:string ='';

  constructor(private _AuthService:AuthService, private _Router:Router) {

  }

  loginForm = new FormGroup ({

    email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(
      '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
    )]),

    password: new FormControl(null, [Validators.required, Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    )]),

  });

  submitLoginForm(loginForm:FormGroup){

    this._AuthService.login(loginForm.value).subscribe((response)=>{

      if(response.message == 'success')
      {
        localStorage.setItem('userToken', response.token);
        this._AuthService.saveCurrentUser();
        this._Router.navigate(['/home'])
      }
      else
      {
        this.error = response.message;
      }
    })
  }

  ngOnInit(): void {
  }

}
