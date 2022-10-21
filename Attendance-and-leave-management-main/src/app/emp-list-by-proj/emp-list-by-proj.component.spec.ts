import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListByProjComponent } from './emp-list-by-proj.component';

describe('EmpListByProjComponent', () => {
  let component: EmpListByProjComponent;
  let fixture: ComponentFixture<EmpListByProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpListByProjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpListByProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
