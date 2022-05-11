import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayrollItemCardComponent } from './payroll-item-card.component';

describe('PayrollItemCardComponent', () => {
  let component: PayrollItemCardComponent;
  let fixture: ComponentFixture<PayrollItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrollItemCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
