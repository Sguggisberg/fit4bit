import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fit4bitSlateInformationComponent } from './fit4bit-slate-information.component';

describe('Fit4bitSlateInformationComponent', () => {
  let component: Fit4bitSlateInformationComponent;
  let fixture: ComponentFixture<Fit4bitSlateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fit4bitSlateInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fit4bitSlateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
