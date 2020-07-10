import { Component, OnInit, ViewChild } from '@angular/core';
import { FeatureService } from '../../service/feature.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RankDto } from 'src/app/shared';


@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private service: FeatureService) { }

  displayedColumns: string[] = ['place', 'name', 'points'];
  rankList: RankDto[];
  dataSource;
  selectedRowIndex: any;
  selected;

  ngOnInit(): void {

    this.service.getRanks().subscribe(res => {
      this.rankList = res;
      console.log(this.rankList);
      this.dataSource = new MatTableDataSource(this.rankList);

    });
    this.dataSource.sort = this.sort;
    this.selected = false;
  }

  onSelect(row) {

    this.selectedRowIndex = row.id;
    this.selected = true;

  }
}
