import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormComponent } from './components/form/form.component';
import { ExpListComponent } from './components/exp-list/exp-list.component';
import { ExpItemComponent } from './components/exp-item/exp-item.component';
import { FormsModule } from '@angular/forms';
import { IncomeMainComponent } from './components/income-main/income-main.component';
import { HeaderComponent } from './components/header/header.component';
import { IncomeFormComponent } from './components/income-form/income-form.component';
import { IncomeListComponent } from './components/income-list/income-list.component';
import { IncomeItemComponent } from './components/income-item/income-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FormComponent,
    ExpListComponent,
    ExpItemComponent,
    IncomeMainComponent,
    HeaderComponent,
    IncomeFormComponent,
    IncomeListComponent,
    IncomeItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
