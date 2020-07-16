import { Component, OnInit } from '@angular/core';
import { AttackResponseModel } from '../model/fight.model';
import { FeatureService } from '../../service/feature.service';
import { AttackResponseDto } from 'src/app/shared';
import { MatSnackBar } from '@angular/material/snack-bar';





@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit {

  displayedColumns: string[] = ['city', 'sharks', 'seals', 'seahorses'];
  dataSource: AttackResponseModel[];


  constructor(private featureService: FeatureService,  private snackbar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.featureService.getFights().subscribe(res => {
      this.dataSource = res.map((x): AttackResponseModel => ({...x}));
    },
      (err) => {
        this.snackbar.open(err.message, 'Bezár', {
          duration: 3000
        });
      });
  }

}
