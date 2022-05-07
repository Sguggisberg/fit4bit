import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fit4bitCloseButtonComponent } from './fit4bit-close-button.component';

describe('Fit4bitCloseButtonComponent', () => {
  let component: Fit4bitCloseButtonComponent;
  let fixture: ComponentFixture<Fit4bitCloseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fit4bitCloseButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fit4bitCloseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
