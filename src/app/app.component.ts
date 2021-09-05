import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sail-login';
  login_display = true;

  constructor() { }

  ngOnInit(): void {

  }

  ngToggle(): void {
    this.login_display = !this.login_display;
  }
  
    
  }

