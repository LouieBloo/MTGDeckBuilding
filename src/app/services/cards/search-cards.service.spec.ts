import { TestBed, inject } from '@angular/core/testing';

import { SearchCardsService } from './search-cards.service';

describe('SearchCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchCardsService]
    });
  });

  it('should be created', inject([SearchCardsService], (service: SearchCardsService) => {
    expect(service).toBeTruthy();
  }));
});
