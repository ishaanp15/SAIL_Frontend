import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dasboard2Component } from './dasboard2.component';

describe('Dasboard2Component', () => {
  let component: Dasboard2Component;
  let fixture: ComponentFixture<Dasboard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dasboard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dasboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
