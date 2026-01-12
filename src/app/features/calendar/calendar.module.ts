import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSummaryComponent } from './calendar-summary/calendar-summary.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CalendarSummaryComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule
  ]
})
export class CalendarModule { }
