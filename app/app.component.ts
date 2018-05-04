import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : String;
  filterDate : any;

  constructor(private router: Router) {
    console.log("App Component: Constructor")
    this.title = 'app';

    let tmpDate = new Date();
    tmpDate.setDate(tmpDate.getDate()-1);
    this.filterDate = tmpDate.getFullYear() + "-";
    this.filterDate += tmpDate.getMonth()+1 + "-";
    this.filterDate += tmpDate.getDate();
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

  ngOnInit() {
    console.log("App Component: ngOnInit")
  }
}
