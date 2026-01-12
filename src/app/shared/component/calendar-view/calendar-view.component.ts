import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { endOfDay, startOfDay } from 'date-fns';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();

  // The events array with start/end dates and "Who worked" info in meta
  events: CalendarEvent<any>[] = [
    {
      start: startOfDay(new Date(2026, 0, 5)), // Jan 5, 2026
      end: endOfDay(new Date(2026, 0, 12)),   // Jan 12, 2026
      title: 'Database Migration',
      color: { primary: '#1e90ff', secondary: '#D1E8FF' },
      meta: {
        team: ['Arjun', 'Priya', 'Sanjay'],
        status: 'Active',
        manager: 'Anand'
      }
    },
    {
      start: startOfDay(new Date(2026, 0, 10)),
      end: endOfDay(new Date(2026, 0, 20)),
      title: 'UI Redesign',
      color: { primary: '#e3bc08', secondary: '#FDF1BA' },
      meta: {
        team: ['Deepa', 'Vikram'],
        status: 'Planning',
        manager: 'Anand'
      }
    }
  ];
}
