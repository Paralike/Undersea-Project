import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  city: string;
  sharks: number;
  seals: number;
  seahorses: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { city: 'Atlantisz', sharks: 6, seals: 5, seahorses: 32 },
  { city: 'Atlantisz2', sharks: 6, seals: 5, seahorses: 32 },

];

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit {

  displayedColumns: string[] = ['city', 'sharks', 'seals', 'seahorses'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
