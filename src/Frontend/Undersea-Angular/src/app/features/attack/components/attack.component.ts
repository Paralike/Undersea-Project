import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeatureService } from '../../service/feature.service';
import { AttackModel } from '../model/attack.model';
import { MatSliderChange, MatSlider } from '@angular/material/slider';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArmyUnitDto } from 'src/app/shared';
import { ArmyUnitModel } from '../../army/model/army.model';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {
  displayedColumns: string[] = ['target', 'choice'];
  name: string;
  userList: AttackModel[];
  selected: boolean;
  selectedUserId: string;
  army: ArmyUnitModel[];
  private searchTerms = new Subject<string>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private el: ElementRef,
    private snackbar: MatSnackBar,
    private service: FeatureService,
    public dialogRef: MatDialogRef<AttackComponent>,
  ) {
    this.army = data.units.map((x): ArmyUnitDto => ({ ...x }));
    this.army.forEach(unit => unit.unitCount = 0);
  }

  @ViewChild('matslider') slider: MatSlider;
  @ViewChild('matslider2') slider2: MatSlider;
  @ViewChild('matslider3') slider3: MatSlider;
  @ViewChild('matslider4') slider4: MatSlider;
  ngOnInit() {
    this.searchUsers('');

    this.name = null;
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      switchMap((term: string) => this.service.getAttack(term)),
    ).subscribe(res => {
      this.userList = res;
    });

    this.selected = false;
  }

  onSelect(row) {
    console.log('ROW', row);
    this.selected = true;
    this.selectedUserId = row.id;
    console.log(row.id);
  }

  sendData() {
    if (this.selected) {

      this.army[0].unitCount = this.slider.value;
      this.army[1].unitCount = this.slider2.value;
      this.army[2].unitCount = this.slider3.value;
      this.army[3].unitCount = this.slider4.value;
      console.log(this.army, this.selectedUserId);
      this.service.sendAttack(this.selectedUserId, this.army).subscribe(() => {
        this.dialogRef.close();
        this.snackbar.open('Sikeres támadás!', 'Bezár', {
          duration: 3000
        });
      });
    } else if (this.selected === false) {
      this.snackbar.open('Válaszd ki kit szeretnél támadni!', 'Bezár', {
        duration: 3000
      });
    }
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }


  searchUsers(name) {
    this.service.getAttack(name).subscribe(res => {
      this.userList = res;
    });
    if (name == null) {
      this.snackbar.open('A név null!', 'Bezár', {
        duration: 3000
      });
    }
  }

}


