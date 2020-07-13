import { Component, OnInit, Inject } from '@angular/core';
import { DevelopmentModel } from '../../developments/model/development.model';
import { FeatureService } from '../../service/feature.service';
import { DEVELOPMENTS } from '../../developments/model/mockDevelopment';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-developments',
  templateUrl: './developments.component.html',
  styleUrls: ['./developments.component.scss']
})
export class DevelopmentsComponent implements OnInit {
  public developments: DevelopmentModel[];
  public selectedDevelopment: number;
  public id: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number[],
    private featureService: FeatureService,
    public dialogRef: MatDialogRef<DevelopmentsComponent>,
    private snackbar: MatSnackBar
  ) { }


  ngOnInit(): void {
    this.developments = [];
    this.featureService.getDevelopments().subscribe(res => {
      this.developments = res;
    });
  }

  selected(development: DevelopmentModel) {
    this.selectedDevelopment = development.developmentType;

  }

  sendData() {
    console.log(this.selectedDevelopment);
    console.log(this.developments[this.selectedDevelopment - 1].name);
    this.dialogRef.close();
    this.snackbar.open('Sikeres vásárlás!', 'Bezár');
  }
}
