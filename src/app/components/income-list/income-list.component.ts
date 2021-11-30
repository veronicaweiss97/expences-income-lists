import { Income } from './../../../shared/Income.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss'],
  animations: [
    trigger('appear', [
      state('void', style({opacity: 0})),
      transition('void <=> *', [
        animate(1000)
      ])
    ])
  ]
})
export class IncomeListComponent implements OnInit {

  @Input() incomes!: Income[]
  @Output() deleteItem: EventEmitter<Income> = new EventEmitter<Income>()
  constructor() { }

  ngOnInit(): void {
  }

  deleteIncomeItem(item: Income) {
    this.deleteItem.emit(item)
  }

}
