import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollMonthListComponent } from './payroll-month-list.component';

describe('PayrollMonthListComponent', () => {
  let component: PayrollMonthListComponent;
  let fixture: ComponentFixture<PayrollMonthListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollMonthListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollMonthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
