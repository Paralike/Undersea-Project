import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeatureService } from '../../service/feature.service';
import { AttackModel } from '../model/attack.model';
import { MatSliderChange, MatSlider } from '@angular/material/slider';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  constructor(
    private el: ElementRef,
    private snackbar: MatSnackBar,
    private service: FeatureService,
    public dialogRef: MatDialogRef<AttackComponent>
    ) { }
  displayedColumns: string[] = ['target', 'choice'];
  userList: AttackModel[];
  selected: boolean;
  selectedUserId: string;
  @ViewChild('matslider') slider: MatSlider;
  @ViewChild('matslider2') slider2: MatSlider;
  @ViewChild('matslider3') slider3: MatSlider;
  ngOnInit() {
    this.service.getAttack().subscribe(res => {
      this.userList = res;
    });
    this.selected = false;

    // we added this so that when the backdrop is clicked the modal is closed.
    //  this.userList =  ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10'];
  }

  onSelect(row) {
    console.log('ROW', row);
    this.selected = true;
    this.selectedUserId = row.id;
    console.log(row.id);
  }

  sendData(){
    console.log('Slider value', this.slider.value, this.slider2.value, this.slider3.value);
    console.log(this.selectedUserId);
    console.log(this.userList.find(x => x.id === this.selectedUserId));
    this.dialogRef.close();
  }

  onInputChange(event: MatSliderChange, index: number) {
    console.log('index', index);
    console.log(event.value);
  }
}


