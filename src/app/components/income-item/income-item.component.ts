import { Income } from './../../../shared/Income.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrls: ['./income-item.component.scss']
})
export class IncomeItemComponent implements OnInit {

  @Input() item!: Income
  @Output() deleteIncome: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  deleteIncomeItem() {
    this.deleteIncome.emit()
  }

}
