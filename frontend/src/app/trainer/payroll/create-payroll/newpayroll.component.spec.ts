import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpayrollComponent } from './newpayroll.component';

describe('NewpayrollComponent', () => {
  let component: NewpayrollComponent;
  let fixture: ComponentFixture<NewpayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewpayrollComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
