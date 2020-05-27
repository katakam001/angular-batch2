import { Component, OnInit } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';
import { Food } from '../model/Food';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {
  title = 'Create a Account2';
  itemImageUrl="../assets/images/Spring-Promo.jpg"
  currentStyles: {};
  currentClasses:{};
  keyUp:String;
  amar="xx-large";
  styleExpr="font-size:xx-large;color:red;"
  classExpr="color-red-class position-right-class";
  styleExpression={};
  canSave=false;
  isSpecial=false;
  isUnchanged=false;
  isDisplay=false;
  hello:string;//ng model
  items = ["bhaskar","amar","rajesh","naren"];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }
  ngOnInit(): void {
    this.setCurrentStyles();
    this.setCurrentClass();
  }
  display(){
    console.log("Button is pressed");
    alert("this is button");
  }
  secondDisplay(event: any){
    console.log(event);
  }
  onKey(event: any){
   console.log(event.target.value);
   this.keyUp=event.target.value;
   console.log(this.keyUp.length);
  }
  tabout(event:any){
    console.log(event.target.value);
  }
  tabout1(event:any){
    console.log(event.target.value);
  }
  selected(event:any){
  alert(event.value);
  this.amar="large";
  }
  unselected(event:any){
   alert(event.value);
   this.styleExpr="font-size:small;color:blue";
   this.classExpr="color-blue-class position-left-class";
  }
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
      'color':'red'
    };
  }

  setCurrentClass() {
    // CSS styles: set per current state of component properties
    this.currentClasses = {
      'color-red-class': this.canSave,
      'position-right-class': this.isUnchanged,
    };
  }
  foodDisplay(value){
    console.log(value);
  }
}
