import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BackendApiService} from '../../services/backend-api.service';

@Component({
  selector: 'app-gitrepos',
  templateUrl: './gitrepos.component.html',
  styleUrls: ['./gitrepos.component.css']
})
export class GitreposComponent implements OnInit {

  githubForm: FormGroup;
  submitted = false;
  private userName: any;
  private repoNames = [];

  constructor(private formBuilder: FormBuilder, private backendService: BackendApiService) { }

  ngOnInit() {
    this.githubForm = this.formBuilder.group({
      githubUserName: ['', Validators.required]
    });
  }

  get f() { return this.githubForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.githubForm.invalid) {
      return ;
    }
    this.userName = this.githubForm.value;

    this.backendService.getAll(this.userName)
      .subscribe(res => {
        this.repoNames = res;
      }, error => {
        console.log(error);
      });
  }

}
