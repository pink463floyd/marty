import { Injectable } from '@angular/core';

@Injectable()

export class DateUtilitiesService {

  constructor() { }

  public getYesterday() {
    let tmpDate = new Date();
    let returnDate;
    tmpDate.setDate(tmpDate.getDate()-1);
    returnDate = tmpDate.getFullYear() + "-";
    returnDate += tmpDate.getMonth()+1 + "-";
    returnDate += tmpDate.getDate();
    return returnDate;
  }
}
