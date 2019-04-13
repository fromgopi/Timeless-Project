import { Component, OnInit } from '@angular/core';
import {BackendApiService} from '../../services/backend-api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private data = [];

  constructor(private backend: BackendApiService) {
    this.getData();
  }

  ngOnInit(): void {
  }

  private getData() {
    return this.backend.getAgentLog().subscribe(res => {
      this.data = res['data'];
    }, error => {
      console.log(error);
    });
  }

}
