import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public message = "scott";

  divisions = [
    {"menu":"AL-East", "league":"AL", "division":"EAST"},
    {"menu":"AL-Central", "league":"AL", "division":"CENT"},
    {"menu":"AL-West", "league":"AL", "division":"WEST"},
  ];
  onSelect(division)  {
    console.log(division.menu)
    this.router.navigate(["/subscriptions",division.menu,this.message])
  }

  constructor(private router: Router) {}
}
