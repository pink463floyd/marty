import { TestBed, inject } from '@angular/core/testing';

import { DateUtilitiesService } from './date-utilities.service';

describe('DateUtilitiesService', () => {
  let testDate: Date;
  let dateUtil: DateUtilitiesService;
  let ret: String;
  beforeEach(() => {
    dateUtil = new DateUtilitiesService();
    TestBed.configureTestingModule({
      providers: [DateUtilitiesService]
    });
  });

  it('should be created', inject([DateUtilitiesService], (service: DateUtilitiesService) => {
    expect(service).toBeTruthy();
  }));

  it('should return yesterdays date from todays date', () => {
     let ret: String;
     ret = dateUtil.getYesterdayString();
     console.log(ret);
     expect(ret).toEqual("2018-6-12");
  });

  it('should return yesterdays date from 2019-01-01', () => {
    testDate = new Date(2019,0,1);
    ret = dateUtil.getPrevDayString(testDate);
    expect(ret).toEqual("2018-12-31");
  });
/*
  it('should return yesterdays date from 2011-10-30', () => {
    testDate = new Date(2011,10,30);
    ret = dateUtil.getPrevDayString(testDate);
    expect(ret).toEqual("2011-10-29");
  });

  it('should return yesterdays date from 2011-10-31', () => {
    testDate = new Date(2011,10,30);
    ret = dateUtil.getPrevDayString(testDate);
    expect(ret).toEqual("2011-10-29");
  });

  it('should return yesterdays date from 2011-10-30', () => {
    testDate = new Date(2011,10,30);
    ret = dateUtil.getPrevDayString(testDate);
    expect(ret).toEqual("2011-10-29");
  });
  */
});
