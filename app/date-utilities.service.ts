import { Injectable } from '@angular/core';

@Injectable()

export class DateUtilitiesService {

  constructor() { }

  public getYesterdayString() {
    let tmpDate = new Date();
    console.log(tmpDate);
    console.log(tmpDate.getDate());
    tmpDate.setDate(tmpDate.getDate()-1);
    console.log(tmpDate);
    console.log("foo");
    let returnDate = tmpDate.getFullYear() + "-";
    console.log(returnDate);
    returnDate += tmpDate.getMonth()+1 + "-";
    console.log(returnDate);
    returnDate += tmpDate.getDate();
    console.log(returnDate);
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

  public getPrevDayString(inDate :Date) : String {
    let myDate = new Date(inDate);
    console.log(myDate);
    console.log("bar");
    let dateOffset = (24*60*60*1000) * 1; //1 days
    //let myDate = new Date();
    myDate.setTime(myDate.getTime() - dateOffset);

    let returnDate: String;
    returnDate = myDate.getFullYear() + "-";
    returnDate += myDate.getMonth()+1 + "-";
    returnDate += myDate.getDate().toString(); 
    return returnDate;


    //return myDate.toString();
    
    /*let tmpDate: Date;
    console.log("scott in");
    console.log(inputDate);
    inputDate.setDate(inputDate.toString() -1);
    console.log(inputDate);
    //console.log(tmpDate)
    console.log("scott out");
    returnDate = inputDate.getFullYear() + "-";
    returnDate += inputDate.getMonth() + "-";
    returnDate += inputDate.getDate().toString(); */
    //return "2011-10-29"
    //return returnDate;
  }

}
