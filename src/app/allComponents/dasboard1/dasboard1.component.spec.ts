import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dasboard1Component } from './dasboard1.component';

describe('Dasboard1Component', () => {
  let component: Dasboard1Component;
  let fixture: ComponentFixture<Dasboard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dasboard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dasboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
