import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeatureService } from '../../service/feature.service';
import { AttackModel } from '../model/attack.model';
import { MatSliderChange, MatSlider } from '@angular/material/slider';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArmyUnitDto } from 'src/app/shared';


@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private el: ElementRef,
    private snackbar: MatSnackBar,
    private service: FeatureService,
    public dialogRef: MatDialogRef<AttackComponent>,
    private featureService: FeatureService
  ) { }
  displayedColumns: string[] = ['target', 'choice'];
  userList: AttackModel[];
  selected: boolean;
  selectedUserId: string;
  army: ArmyUnitDto [];
  @ViewChild('matslider') slider: MatSlider;
  @ViewChild('matslider2') slider2: MatSlider;
  @ViewChild('matslider3') slider3: MatSlider;
  ngOnInit() {

    this.service.getAttack().subscribe(res => {
      this.userList = res;
    });
    this.selected = false;
    console.log(this.data);

    // we added this so that when the backdrop is clicked the modal is closed.
    //  this.userList =  ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10'];
  }

  onSelect(row) {
    console.log('ROW', row);
    this.selected = true;
    this.selectedUserId = row.id;
    console.log(row.id);
  }

  sendData() {
    if (this.selected !== false) {
      // this.army[0].unitCount = this.slider.value;
      // this.army[1].unitCount = this.slider2.value;
      // this.army[2].unitCount = this.slider3.value;
      // this.featureService.sendAttack(this.selectedUserId, this.army).subscribe(() => {});
      this.dialogRef.close();
      this.snackbar.open('Sikeres támadás!', 'Bezár');
    } else if (this.selected === false) {
      this.snackbar.open('Válaszd ki kit szeretnél támadni!', 'Bezár');
    }
  }

  onInputChange(event: MatSliderChange, index: number) {
    console.log('index', index);
    console.log(event.value);
  }
}


