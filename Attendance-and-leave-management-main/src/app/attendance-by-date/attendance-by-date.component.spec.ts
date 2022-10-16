import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceByDateComponent } from './attendance-by-date.component';

describe('AttendanceByDateComponent', () => {
  let component: AttendanceByDateComponent;
  let fixture: ComponentFixture<AttendanceByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
