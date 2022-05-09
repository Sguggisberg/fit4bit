import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingItemCardComponent } from './training-item-card.component';

describe('TrainingItemCardComponent', () => {
  let component: TrainingItemCardComponent;
  let fixture: ComponentFixture<TrainingItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingItemCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
