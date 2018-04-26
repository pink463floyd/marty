import { Component, OnInit } from '@angular/core';
import {MlbRepoService} from '../mlb-repo.service';
//https://www.dropbox.com/sh/0sankm6febsfogp/AAB1p-aVJnoReeclPZdv6jYua/Raw%20Icons%20-%20AL?dl=0
//http://resizeimage.net/

@Component({
  selector: 'app-test',
  template: `
    <div *ngFor="let standing of standings">
       <img src="../assets/icon.png" alt="some text" width=16 height=16 style="float:left;">
       <pre>     {{standing.Team}}           {{standing.W}}      {{standing.L}}</pre>
    </div>
    <table>
    <tr *ngFor="let standing of standings">
       <img src="../assets/icon.png" alt="some text" width=16 height=16 style="float:left;">
       <td style="width:25px;border-style:solid"></td>
       <td style="font-family:monospace; width:25px; text-align:right;border-style:solid">{{standing.Team}}  </td>
       <td style="font-family:monospace; width:100px; text-align:right;border-style:solid">{{standing.W}} </td>
       <td style="height:25px; font-family:monospace; width:50px; text-align:right;border-style:solid">{{standing.L}}</td>
    </tr>
    </table>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public standings = [];

  constructor(private _MlbRepoService: MlbRepoService) { }

  ngOnInit() {
    this.standings = this._MlbRepoService.getStandings();
  }

}
