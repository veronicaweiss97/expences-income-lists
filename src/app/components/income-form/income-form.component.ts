import { Income } from './../../../shared/Income.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.scss']
})
export class IncomeFormComponent implements OnInit {

  @Input() item: Income = new Income(0, '', new Date('dd.mm.yyyy'))
  @Output() formValue: EventEmitter<Income> = new EventEmitter<Income>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.formValue.emit(form.value)
    form.reset()
  }

}
