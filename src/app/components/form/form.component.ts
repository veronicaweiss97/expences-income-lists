import { Expense } from './../../../shared/expense.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() item: Expense = new Expense(0, "")
  @Output() formValue: EventEmitter<Expense> = new EventEmitter<Expense>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.formValue.emit(form.value)
    form.reset()
  }


}
