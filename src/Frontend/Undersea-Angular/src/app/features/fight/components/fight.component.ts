import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../model/fight.model';
import { FeatureService } from '../../service/feature.service';
import { AttackResponseDto } from 'src/app/shared';





@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit {

  displayedColumns: string[] = ['city', 'sharks', 'seals', 'seahorses'];
  dataSource: AttackResponseDto[];

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.featureService.getFights().subscribe(res => {
      this.dataSource = res;
    },
      (err) => {
        console.log(err);
      });
  }

}
