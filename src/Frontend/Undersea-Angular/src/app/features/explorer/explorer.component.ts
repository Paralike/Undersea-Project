import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FeatureService } from '../service/feature.service';


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  constructor(private service: FeatureService) { }

  displayedColumns: string[] = [ 'name', 'feature'];
  dataSource;
  explorerList: any;

  ngOnInit(): void {
    this.service.getArmy().subscribe(res => {
      console.log(res);
    });

    this.dataSource = new MatTableDataSource(this.explorerList);
  }

}
