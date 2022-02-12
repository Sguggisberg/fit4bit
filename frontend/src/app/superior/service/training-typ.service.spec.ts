import { TestBed } from '@angular/core/testing';

import { TrainingTypService } from './training-typ.service';

describe('TrainingTypService', () => {
  let service: TrainingTypService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingTypService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
