import { Injectable } from '@angular/core';

@Injectable()

export class DateUtilitiesService {

  constructor() { }

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

  public getPrevDayString(inDate :Date) : String {
    let myDate = new Date(inDate);
    let dateOffset = (24*60*60*1000) * 1; //1 days
    myDate.setTime(myDate.getTime() - dateOffset);

    let returnDate: String;
    returnDate = myDate.getFullYear() + "-";
    returnDate += myDate.getMonth()+1 + "-";
    returnDate += myDate.getDate().toString(); 
    return returnDate;
  }

}
