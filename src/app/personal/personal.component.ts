import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

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
  personalDetails:FormGroup;
  constructor(private fb: FormBuilder) {
    this.personalDetails = fb.group({
      firstName : new FormControl({ value: '', disabled: false },[Validators.required,Validators.maxLength(10),Validators.minLength(5)]),
      lastName : new FormControl({ value: 'Naren', disabled: true },[Validators.required]),
      email:new FormControl({value: '', disabled: false },[Validators.required,Validators.email]),
      password:new FormControl({value: '', disabled: false},Validators.required),
      address: this.fb.group({
        city: new FormControl({value: 'Hyderabad', disabled: false}),
        state: new FormControl({value: 'Telangana', disabled: true}),
        zip: new FormControl({value: '', disabled: false})
      })
      });
   }

  ngOnInit(): void {
  }

  read(){
    this.display={
    "firstName":this.personalDetails.get('firstName').value,
    "lastName":this.personalDetails.get('lastName').value,
    "email":this.personalDetails.get('email').value,
    "password":this.personalDetails.get('password').value,
    "city":this.personalDetails.get('address').get('city').value,
    "state":this.personalDetails.get('address').get('state').value,
    "zip":this.personalDetails.get('address').get('zip').value,
    }
    this.personalDetails.setValue(
      {
        firstName: 'Nancy',
        lastName: 'Drew',
        email:'Nancy.Drew@gmail.com',
        password:'234',
        address: {
          city: "Bangalore",
          state: "Brigade Road",
          zip: "600070"
        }
      });

  }
  generateEmail(event:any){
    this.personalDetails.patchValue({email:this.personalDetails.get('firstName').value.concat(".").concat(this.personalDetails.get('lastName').value).concat("@gmail.com")});
  }
}
