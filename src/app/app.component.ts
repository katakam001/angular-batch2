import { Component } from '@angular/core';
import { Food } from './model/Food';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-batch2';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak-5'},
    {value: 'pizza-1', viewValue: 'Pizza-6'},
    {value: 'tacos-2', viewValue: 'Tacos-7'}
  ];
  dropDownArray:String[]=[
    "bhaskar","katakam","family"
  ]
}

