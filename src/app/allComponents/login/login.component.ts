import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  url = 'https://git.heroku.com/sailapi.git'; 
  postData = {username:'username',
      password:'password'};
  @Output("ngToggle") ngToggle: EventEmitter<any> = new EventEmitter();
  constructor(public http: HttpClient , private _router: Router) { }

  ngOnInit(): void {
    
  }

 
  

  OnInputUser(event: any) {
    this.postData.username = event.target.value;
    console.log(this.postData.username);
    }

  OnInputPass(event: any) {
    this.postData.password = event.target.value;
    }

   loginClick(): void{

    //console.log(this.postData.password);
    if(this.postData.username == 'role1')
    { this._router.navigate(['role1'])}

    if(this.postData.username == 'role2')
    { this._router.navigate(['role2'])}

    if(this.postData.username == 'role3')
    { this._router.navigate(['role3'])}
   }

  onClick(): void {
  this.ngToggle.emit();
  }

}
