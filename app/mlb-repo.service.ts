import { Injectable } from '@angular/core';

@Injectable()
export class MlbRepoService {

  constructor() { }

  getStandings() {
    return [
       {"League":"AL", "Divison": "EAST", "Team":"BOS", "W":18, "L":5, "PCT":.783,"GB":0, "Date":"2018-04-26"},
       {"League":"AL", "Divison": "EAST", "Team":"BLU", "W":14, "L":9, "PCT":.609,"GB":4.0, "Date":"2018-04-26"},
       {"League":"AL", "Divison": "EAST", "Team":"YAN", "W":14, "L":9, "PCT":.609,"GB":4.0, "Date":"2018-04-26"},
       {"League":"AL", "Divison": "EAST", "Team":"RAY", "W":9, "L":13, "PCT":.409,"GB":8.5, "Date":"2018-04-26"},
       {"League":"AL", "Divison": "EAST", "Team":"ORI", "W":6, "L":18, "PCT":.250,"GB":12.5, "Date":"2018-04-26"},

    ];
  }

}
