import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalDirectorateComponent } from './operational-directorate.component';

describe('OperationalDirectorateComponent', () => {
  let component: OperationalDirectorateComponent;
  let fixture: ComponentFixture<OperationalDirectorateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalDirectorateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalDirectorateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
