import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../service/feature.service';


@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  constructor(private service: FeatureService) { }
  displayedColumns: string[] = ['place','name', 'points'];
  rankList; 
  selectedRowIndex:any;
  selected;

  ngOnInit(): void {
    this.service.getRanks().subscribe(res => this.rankList = res);
    this.selected = false;
  }

  onSelect(row){
    
    this.selectedRowIndex = row.id;
    this.selected = true;
     
   }
}
