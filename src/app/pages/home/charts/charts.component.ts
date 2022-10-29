import { Component } from '@angular/core';

export interface Option {
  id:number;
  name:string
}
@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  options:Option[];
  selectedOption:Option

  constructor() {

    this.options = [{
      id: 1,
      name: 'monthly sales report'
    },
    {
      id: 2,
      name: 'lead status'
    },
    {
      id: 3,
      name: 'latest lead'
    },
    {
      id: 4,
      name: 'leads by nationality'
    },
    {
      id: 5,
      name: 'leads assigned account'
    }
  ]
  this.selectedOption = this.options[0];
  }

  onSelectOption(option:Option) {
    this.selectedOption = option
  }
}
