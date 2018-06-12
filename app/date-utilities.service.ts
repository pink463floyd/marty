import { Injectable } from '@angular/core';

@Injectable()

export class DateUtilitiesService {

  constructor() { }

  public getYesterdayString() {
    let tmpDate = new Date();
    tmpDate.setDate(tmpDate.getDate()-1);
    let returnDate = tmpDate.getFullYear() + "-";
    returnDate += tmpDate.getMonth()+1 + "-";
    returnDate += tmpDate.getDate();
    return returnDate;
  }

  public getYesterdayObject() {
    let date= new Date();
    date.setDate(date.getDate()-1);
    return date;
  }
  
  public dateObject2String(date: Date) : string {
    let dateString = date.getFullYear() + "-";
    dateString += date.getMonth()+1 + "-";
    dateString += date.getDate();
    console.log(date);
    console.log(date.getFullYear());
    console.log(date.getMonth()+1);
    console.log(date.getDate());
    return dateString;
  }

  public getPrevDayString(inputDate :Date) : String {

    let outputDate: Date;
    let returnDate: String;
    outputDate = new Date();
    inputDate.setDate(inputDate.getDate() -1);
    returnDate = inputDate.getFullYear() + "-";
    returnDate += inputDate.getMonth() + "-";
    returnDate += inputDate.getDate().toString();
    //return "2011-10-29"
    return returnDate;
  }

}
