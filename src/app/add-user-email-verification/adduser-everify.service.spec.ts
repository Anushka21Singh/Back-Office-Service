import { TestBed, inject } from '@angular/core/testing';

import { AdduserEverifyService } from './adduser-everify.service';

describe('AdduserEverifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdduserEverifyService]
    });
  });

  it('should be created', inject([AdduserEverifyService], (service: AdduserEverifyService) => {
    expect(service).toBeTruthy();
  }));
});
