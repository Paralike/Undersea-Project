import { Component, OnInit, ViewChild } from '@angular/core';
import { FeatureService } from '../../service/feature.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RankDto } from 'src/app/shared';
import { RankModel } from '../model/rank.model';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private service: FeatureService, private snackbar: MatSnackBar) { }
  name: string;
  displayedColumns: string[] = ['place', 'name', 'points'];
  rankList: RankModel[];
  dataSource;
  selectedRowIndex: any;
  selected;
  private searchTerms = new Subject<string>();


  ngOnInit(): void {


    this.searchUsers('');
    this.name = null;
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),
      switchMap((term: string) => this.service.getRanks(term)),
    ).subscribe(res => {
      console.log('ASDSADSAD', res);
      this.rankList = res.map((x): RankModel => ({ ...x }));
      this.dataSource = new MatTableDataSource(this.rankList);
      this.dataSource.sort = this.sort;
      // this.dataSource = this.rankList;
      console.log(this.dataSource);
      this.selected = false;
    });
  }

  onSelect(row) {

    this.selectedRowIndex = row.id;
    this.selected = true;

  }

  search(term: string): void {
    if (term == null){
      this.snackbar.open('A név null!', 'Bezár', {
        duration: 3000
      });
    }else {
      this.sendData(term);
    }
 //   this.searchTerms.next(term);
  }
  searchUsers(name) {
    this.sendData(name);
    if (name == null) {
      this.snackbar.open('A név null!', 'Bezár', {
        duration: 3000
      });
    }
  }

  sendData(name){
    this.service.getRanks(name).subscribe(res => {
      this.rankList = res.map((x): RankModel => ({ ...x }));
      this.dataSource = new MatTableDataSource(this.rankList);
      this.dataSource.sort = this.sort;
      console.log(this.rankList);
    });
    
  }
}
