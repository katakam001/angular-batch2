import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  name1:string;
  name2:string;
  display={};
  ngModeldisplay={};
  constructor() { }

  ngOnInit(): void {
  }

  // firstName = new FormControl('');
  firstName = new FormControl({ value: 'Hari', disabled: false },Validators.required);
  lastName = new FormControl({ value: 'Naren', disabled: true });
  read(){
   this.display={
    "firstName":this.firstName.value,
    "lastName":this.lastName.value
   }
  }
  ngModelread(){
   this.ngModeldisplay={
     "firstName":this.name1,
     "lastName":this.name2
   }
  }
  reset(){
    this.firstName.reset({ value: 'bhaskar', disabled: true });
    this.lastName.reset({ value: 'katakam', disabled: false });
  }

}
