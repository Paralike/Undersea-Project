import { Component, OnInit, Inject } from '@angular/core';
import { DevelopmentModel } from '../../developments/model/development.model';
import { FeatureService } from '../../service/feature.service';
import { DEVELOPMENTS } from '../../developments/model/mockDevelopment';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DevelopmentData } from '../../pages/main/components/navbar/navbar.component';
@Component({
  selector: 'app-developments',
  templateUrl: './developments.component.html',
  styleUrls: ['./developments.component.scss']
})
export class DevelopmentsComponent implements OnInit {
  public developments: DevelopmentModel[];
  public selectedDevelopment: number;
  public id: string;
  constructor(private featureService: FeatureService, @Inject(MAT_DIALOG_DATA) public data: DevelopmentData) { }

  ngOnInit(): void {
    this.developments = [];
    this.featureService.getDevelopments().subscribe(res => {
      this.developments = res;
    });
  }

  selected(development: DevelopmentModel) {
    this.selectedDevelopment = development.developmentType;
    document.getElementById('developmentButton').style.opacity = '1';

  }
}
