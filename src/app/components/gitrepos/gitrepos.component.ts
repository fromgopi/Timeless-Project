import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-gitrepos',
  templateUrl: './gitrepos.component.html',
  styleUrls: ['./gitrepos.component.css']
})
export class GitreposComponent implements OnInit {

  githubForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

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

    console.log(this.githubForm.value);
  }

}
