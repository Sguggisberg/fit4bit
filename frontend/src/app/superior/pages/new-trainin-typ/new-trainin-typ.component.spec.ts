import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTraininTypComponent } from './new-trainin-typ.component';

describe('NewTraininTypComponent', () => {
  let component: NewTraininTypComponent;
  let fixture: ComponentFixture<NewTraininTypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTraininTypComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTraininTypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
