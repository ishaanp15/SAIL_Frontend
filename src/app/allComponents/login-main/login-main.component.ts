import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {
  login_display = true;
  constructor() { }

  ngOnInit(): void {
  }

  ngToggle(): void {
    this.login_display = !this.login_display;
  }  
}
