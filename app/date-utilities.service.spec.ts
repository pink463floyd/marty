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

  it('should return yesterdays date from todays date NOTE: this needs to be refactored every day :-(', () => {
     let ret: String;
     ret = dateUtil.getPrevDayString(new Date());
     console.log(ret);
     expect(ret).toEqual("2018-6-14");
  });

  it('should return yesterdays date object from todays date NOTE: this needs to be refactored every day :-(', () => {
    let ret: Date;
    ret = dateUtil.getPrevDayObject(new Date());
    console.log(ret);
    expect(ret.getDate()).toEqual(14);
    expect(ret.getFullYear()).toEqual(2018);
    expect(ret.getMonth()).toEqual(5);
 });

  it('should return yesterdays date from future 2019-01-01', () => {
    testDate = new Date("January 1, 2019");
    ret = dateUtil.getPrevDayString(testDate);
    expect(ret).toEqual("2018-12-31");
  });

  it('should return yesterdays date from past date 2011-10-31', () => {
    testDate = new Date("October 31, 2011");
    ret = dateUtil.getPrevDayString(testDate);
    expect(ret).toEqual("2011-10-30");
  });

  it('should return yesterdays date from past date 2011-10-30', () => {
    testDate = new Date("October 30, 2011");
    ret = dateUtil.getPrevDayString(testDate);
    expect(ret).toEqual("2011-10-29");
  });

  it('should return yesterdays date from leap year 2020-02-29', () => {
    testDate = new Date("February 29, 2020");

    ret = dateUtil.getPrevDayString(testDate);
    expect(ret).toEqual("2020-2-28");
  });

  it('should return yesterdays date from leap year 2020-03-01', () => {
    testDate = new Date('March 1, 2020 03:24:00');

    ret = dateUtil.getPrevDayString(testDate);
    expect(ret).toEqual("2020-2-29");
  });

  it('should return yesterdays date from leap year 2020-03-01 for all 24 hours of the day', () => {
    for (let i=0;i<24;i++) {
      let ret = dateUtil.getPrevDayString(new Date("March 1, 2020 " + i.toString() + ":00:00"));
      expect(ret).toEqual("2020-2-29");    
    }
  });



 it('should return string representing date mm/dd/xxxx', () => {
  testDate = new Date("December 29, 2020");
  ret = dateUtil.dateObject2String(testDate);
  expect(ret).toEqual("2020-12-29");
});
it('should return string representing date m/d/xxxx', () => {
  testDate = new Date("January 1, 2020");
  ret = dateUtil.dateObject2String(testDate);
  expect(ret).toEqual("2020-1-1");
});
});
