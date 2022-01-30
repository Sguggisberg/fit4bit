import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankSlateInformationComponent } from './blank-slate-information.component';

describe('BlankSlateInformationComponent', () => {
  let component: BlankSlateInformationComponent;
  let fixture: ComponentFixture<BlankSlateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankSlateInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankSlateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
