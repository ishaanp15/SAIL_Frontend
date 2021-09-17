import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMOSYSTEMComponent } from './cmosystem.component';

describe('CMOSYSTEMComponent', () => {
  let component: CMOSYSTEMComponent;
  let fixture: ComponentFixture<CMOSYSTEMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMOSYSTEMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMOSYSTEMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
