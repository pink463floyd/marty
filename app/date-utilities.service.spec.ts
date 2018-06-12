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

  it('should return yesterdays date from 2011-10-30', () => {
    let testDate: Date;
    let dateUtil: DateUtilitiesService;
    let ret: String;

    console.log("My first test");

    testDate = new Date(2011,10,30);
    dateUtil = new DateUtilitiesService();
    ret = dateUtil.getPrevDayString(testDate);
    console.log(ret);
    expect(ret).toEqual("2011-10-29");
  });
});
