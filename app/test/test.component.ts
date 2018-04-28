import { Component, OnInit } from '@angular/core';
import {MlbRepoService} from '../mlb-repo.service';
import {ActivatedRoute} from '@angular/router';
//https://www.dropbox.com/sh/0sankm6febsfogp/AAB1p-aVJnoReeclPZdv6jYua/Raw%20Icons%20-%20AL?dl=0
//http://resizeimage.net/


@Component({
  selector: 'app-test',
  template: `
    <table>
      <tr> 
        <th></th>
        <th>Team</th>
        <th style="text-align:right">W</th>
        <th style="text-align:right">L</th>
        <th>PCT</th>
        <th>GB</th>

      </tr>
      <tr *ngFor="let standing of standings">
        <td> 
          <img src="../assets/icon.png" alt="some text" width=16 height=16 style="float:left;">
        </td>
        <td style="width:50px;  ">{{standing.Team}}  </td>
        <td style="width:150px; ">{{standing.W}} </td>
        <td style="width:100px; ">{{standing.L}}</td>
        <td style="width:200px; ">{{standing.PCT}}</td>
        <td style="width:200px; ">{{standing.GB}}</td>

      </tr>
    </table>
  `,
  styleUrls:['../app.component.css']
})
export class TestComponent implements OnInit {
  public standings = [];

  constructor(private _MlbRepoService: MlbRepoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.standings = this._MlbRepoService.getStandings();
    console.log("scott in")
    console.log((this.route.snapshot.paramMap.get('id')));
    console.log((this.route.snapshot.paramMap.get('date')));
    console.log("scott out")

  }

}
