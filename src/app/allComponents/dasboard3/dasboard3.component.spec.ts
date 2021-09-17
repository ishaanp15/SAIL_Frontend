import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dasboard3Component } from './dasboard3.component';

describe('Dasboard3Component', () => {
  let component: Dasboard3Component;
  let fixture: ComponentFixture<Dasboard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dasboard3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dasboard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
