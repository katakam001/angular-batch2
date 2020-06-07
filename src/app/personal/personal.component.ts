import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, Form } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  name1:string;
  name2:string;
  display={};
  ngModeldisplay={};
  constructor() { }
  personalDetails:FormGroup;
  ngOnInit(): void {
    this.personalDetails = new FormGroup({
      firstName : new FormControl({ value: '', disabled: false },[Validators.required,Validators.maxLength(10),Validators.minLength(5)]),
      lastName : new FormControl({ value: 'Naren', disabled: true },[Validators.required]),
      email:new FormControl({value: '', disabled: false },[Validators.required,Validators.email]),
      password:new FormControl({value: '', disabled: false},Validators.required)
      });
  }

  read(){
    this.display={
    "firstName":this.personalDetails.get('firstName').value,
    "lastName":this.personalDetails.get('lastName').value
    }

  }


}
