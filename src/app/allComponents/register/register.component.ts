import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  @Output("ngToggle") ngToggle: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }
  onClick(): void {
    this.ngToggle.emit();
  }
}
