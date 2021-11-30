import { Expense } from './../../../shared/expense.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.scss'],
})
export class ExpItemComponent implements OnInit {

  @Input() item!: Expense
  @Output() xButton: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  deleteItems() {
    this.xButton.emit()
  }

}
