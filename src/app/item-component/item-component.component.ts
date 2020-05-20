import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {
  title = 'Create a Account2';
  itemImageUrl="../assets/images/Spring-Promo.jpg"
  isUnchanged=false;
  constructor() { }
  keyUp:String;

  ngOnInit(): void {
  }
  display(){
    console.log("Button is pressed");
    alert("this is button");
  }
  secondDisplay($event){
    console.log($event);
  }
  onKey(event: any){
   console.log(event.target.value);
   this.keyUp=event.target.value;
   console.log(this.keyUp.length);
  }

}
