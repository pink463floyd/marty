import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {DateUtilitiesService} from './date-utilities.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : String;
  filterDate : any;

  constructor(private router: Router, private dateUtil: DateUtilitiesService) {
    console.log("App Component: Constructor")
    this.title = 'app';
    this.filterDate = this.dateUtil.getYesterdayString();
  }

  ngOnInit() {
    console.log("App Component: ngOnInit -- About to Navigate to /subscriptions" + this.filterDate)
    this.router.navigate(["/subscriptions", this.divisions[0].menu,this.filterDate])
  }

  divisions = [
    {"menu":"AL-East", "league":"AL", "division":"EAST"},
    {"menu":"AL-Central", "league":"AL", "division":"CENT"},
    {"menu":"AL-West", "league":"AL", "division":"WEST"},
  ];

  onSelect(division)  {
    console.log("App Component: onSelect")
    console.log(division.menu)
    console.log(this.filterDate)
    this.router.navigate(["/subscriptions",division.menu,this.filterDate])
  }
}
