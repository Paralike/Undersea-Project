import { Component, OnInit } from '@angular/core';
import { ARMY } from '../model/mock-army';
import { ArmyModel } from '../model/army.model';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss']
})
export class ArmyComponent implements OnInit {
  public army: ArmyModel[];

  constructor() { }

  ngOnInit(): void {
    this.army = [];
    this.army = ARMY;
  }

}
