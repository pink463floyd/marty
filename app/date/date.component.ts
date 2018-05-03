import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-date',
  template: `
    <p>
    <button (click)="updateCalcs($event)">Click me!</button>

       <mat-form-field>
          <input matInput [matDatepicker]="picker" [(ngModel)]="date"  (dateChange)="updateCalcs($event)" placeholder="Choose a date">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker> ngDefaultControl [(ngModel)]="date" (selectedChanged)="updateCalcs($event)" </mat-datepicker>
      </mat-form-field> 
      {{date}}   
    </p>
  `,
  styles: []
})
export class DateComponent implements OnInit {
  date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  updateCalcs(event){
    console.log(event);
  }
  
}
