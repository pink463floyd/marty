import { Component, OnInit } from '@angular/core';
import {MlbRepoService} from '../mlb-repo.service';
//https://www.dropbox.com/sh/0sankm6febsfogp/AAB1p-aVJnoReeclPZdv6jYua/Raw%20Icons%20-%20AL?dl=0
//http://resizeimage.net/

@Component({
  selector: 'app-test',
  template: `
    <table>
      <tr> 
        <th></th>
        <th>Team</th>
        <th>W</th>
        <th>L</th>
      </tr>
      <tr *ngFor="let standing of standings">
         <td> 
          <img src="../assets/icon.png" alt="some text" width=16 height=16 style="float:left;">
         </td>
         <td style="width:30px;  ">{{standing.Team}}  </td>
        <td style="width:100px; ">{{standing.W}} </td>
        <td style="width:50px;  ">{{standing.L}}</td>
      </tr>
    </table>
  `,
  styles: [`
      td {
        border:0px solid black; //Set to 1 for visual debug
        height:25px;
        font-family:monospace;
        text-align:right;
        font-size: 15px;
      }
      th {
        border:0px solid black;  //Set to 1 for visual debu
        font-family:monospace;
        text-align:right;
        font-size: 15px;
      }
      table {
        border:0px solid black;  //Set to 1 for visual debu
        display:block;
        margin-left: auto;
        //margin-left:20px;
        margin-right: auto;
      }
  `]
})
export class TestComponent implements OnInit {
  public standings = [];

  constructor(private _MlbRepoService: MlbRepoService) { }

  ngOnInit() {
    this.standings = this._MlbRepoService.getStandings();
  }

}
