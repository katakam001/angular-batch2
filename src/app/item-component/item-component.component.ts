import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {
  title = 'Create a Account2';
  itemImageUrl="../assets/images/Spring-Promo.jpg"
  isUnchanged=true;
  constructor() { }

  ngOnInit(): void {
  }

}
