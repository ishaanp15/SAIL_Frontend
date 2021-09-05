import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  url = 'https://localhost:3000/login'; 
  postData = {username:'username',
      password:'password'};
  @Output("ngToggle") ngToggle: EventEmitter<any> = new EventEmitter();
  constructor(public http: HttpClient) { }

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

    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    this.http.post<any>(this.url, this.postData,{headers})
    .toPromise().then(data =>
      { console.log(data);
      });

   }

  onClick(): void {
  this.ngToggle.emit();
  }

}
