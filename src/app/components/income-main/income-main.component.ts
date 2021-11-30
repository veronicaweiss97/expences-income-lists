import { Income } from './../../../shared/Income.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-main',
  templateUrl: './income-main.component.html',
  styleUrls: ['./income-main.component.scss']
})
export class IncomeMainComponent implements OnInit {

  incomeArr: Income[] = new Array<Income>()
  totalIncome: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  addIncomeItem(newItem: Income) {
    this.incomeArr.push(newItem)
    this.totalIncome += newItem.amount
  }

  deleteItem(item: any) {
    let index = this.incomeArr.indexOf(item)
    this.incomeArr.splice(index, 1)
    this.totalIncome -= item.amount
  }

}
