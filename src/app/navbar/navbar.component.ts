import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean = false;
  constructor(private _AuthServise:AuthService) {}

  isLogout(){

    this._AuthServise.logout();
  }

  ngOnInit(): void {
    this._AuthServise.currentUser.subscribe(()=> {

      if(this._AuthServise.currentUser.getValue() != null){

        this.isLogin = true;
      }
      else
      {
        this.isLogin = false;
      }
    })
  }

}
