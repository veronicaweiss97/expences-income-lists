import { Expense } from './../../../shared/expense.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-exp-list',
  templateUrl: './exp-list.component.html',
  styleUrls: ['./exp-list.component.scss'],
  animations: [
    trigger('appear', [
      state('void', style({opacity: 0})),
      transition('void <=> *', [
        animate(1000)
      ])
    ])
  ]
})
export class ExpListComponent implements OnInit {
//
  @Input() expenses!: Expense[]
  @Output() delete: EventEmitter<Expense> = new EventEmitter<Expense>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(item: Expense) {
    this.delete.emit(item)
  }

}
