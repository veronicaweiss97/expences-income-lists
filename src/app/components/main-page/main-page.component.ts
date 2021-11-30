import { Expense } from './../../../shared/expense.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  expenses: Expense[] = new Array<Expense>()
  totalAmount: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: any) {
    console.log('addItem');
    this.expenses.push(newItem)
    this.totalAmount += newItem.amount
  }

  deleteItems(item: any) {
    let index = this.expenses.indexOf(item)
    this.expenses.splice(index, 1)
    this.totalAmount -= item.amount
  }
}
