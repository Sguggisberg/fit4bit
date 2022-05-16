import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollReviewItemCardComponent } from './payroll-review-item-card.component';

describe('PayrollReviewItemCardComponent', () => {
  let component: PayrollReviewItemCardComponent;
  let fixture: ComponentFixture<PayrollReviewItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrollReviewItemCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollReviewItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
