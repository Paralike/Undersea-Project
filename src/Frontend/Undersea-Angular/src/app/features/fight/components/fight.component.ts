import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit {

  displayedColumns: string[] = ['cityName', 'sharks', 'seals', 'seahorses'];

  constructor() { }

  ngOnInit(): void {
  }

}
