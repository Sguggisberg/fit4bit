import { TestBed } from '@angular/core/testing';

import { CardItemService } from './card-item.service';

describe('CardItemService', () => {
  let service: CardItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
