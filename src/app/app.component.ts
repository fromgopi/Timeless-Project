import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BackendApiService} from './services/backend-api.service';
import Data from './services/Data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Timeless-Project';

  private data = [];

  constructor(private backend: BackendApiService, private http: HttpClient) {
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
