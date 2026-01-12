import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarSummaryComponent } from './calendar-summary/calendar-summary.component';

const routes: Routes = [
    { path: '', component: CalendarSummaryComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CalendarRoutingModule { }