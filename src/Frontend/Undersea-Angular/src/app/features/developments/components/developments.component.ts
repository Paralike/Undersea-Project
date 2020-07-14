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
  bought = [0];
  already: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number[],
    private featureService: FeatureService,
    public dialogRef: MatDialogRef<DevelopmentsComponent>,
    private snackbar: MatSnackBar
  ) {
    console.log(this.bought);
   }


  ngOnInit(): void {
    this.developments = [];
    this.featureService.getDevelopments().subscribe(res => {
      this.developments = res;
    });
    this.bought = JSON.parse(localStorage.getItem('bought'));
    
  }

  selected(development: DevelopmentModel) {
    this.selectedDevelopment = development.developmentType;
    console.log(this.bought);
    console.log(this.selectedDevelopment);
  }
  boughtDevelopment(development: DevelopmentModel){
    this.bought.forEach(element => {
      if (element === development.developmentType){
        console.log(element);
        this.already = true;
      }
    });
    console.log(this.bought);
  }

  sendData() {
    console.log(this.selectedDevelopment);
    // tslint:disable-next-line:prefer-for-of
    this.bought = JSON.parse(localStorage.getItem('bought'));
    if (!this.bought.some(x => x === this.selectedDevelopment)) {
        this.bought.push(this.selectedDevelopment);
       
        console.log(this.bought);
        console.log(this.developments[this.selectedDevelopment - 1].name);
        this.dialogRef.close();
        this.snackbar.open('Sikeres vásárlás!', 'Bezár', {
          duration: 3000
        });
      }else{
        this.snackbar.open('Ezt a terméket már megvásároltad!', 'Bezár', {
          duration: 3000
        });
      }


    }
}

