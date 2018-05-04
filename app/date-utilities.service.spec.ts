import { TestBed, inject } from '@angular/core/testing';

import { DateUtilitiesService } from './date-utilities.service';

describe('DateUtilitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateUtilitiesService]
    });
  });

  it('should be created', inject([DateUtilitiesService], (service: DateUtilitiesService) => {
    expect(service).toBeTruthy();
  }));
});
