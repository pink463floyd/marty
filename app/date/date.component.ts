import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DateUtilitiesService} from '../date-utilities.service'


@Component({
  selector: 'app-date',
  template: `
    <p>
       <mat-form-field>
          <input matInput [matDatepicker]="picker" [(ngModel)]="myDateObject"  (dateChange)="sendEvent($event)" placeholder="">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker>  </mat-datepicker>
      </mat-form-field> 
    </p>
  `,
  styles: []
})
export class DateComponent implements OnInit {
  myDateObject: Date;
  @Output() public childEvent = new EventEmitter();

  constructor(private dateUtil: DateUtilitiesService) { }

  ngOnInit() {
    //Note that "myDate" is presented in the DatePicker Component's HTML
    this.myDateObject=this.dateUtil.getYesterdayObject();
    console.log("Date.component: ngOnInit" + this.myDateObject)
  }

  sendEvent(event){ 
    let dateString = this.dateUtil.dateObject2String(event.value);
    this.childEvent.emit(dateString);
    console.log("Date.component: sendEvent" + dateString);
  }
  
}
