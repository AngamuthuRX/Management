import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public widgets: any[] = [];

  constructor() {
    this.widgets = [
      { title: 'Total Users', value: 1500, icon: 'people', color: '#ff0000' },
      { title: 'Active Projects', value: 75, icon: 'folder_open', color: '#228B22' },
      { title: 'Pending Tasks', value: 320, icon: 'assignment_late', color: '#9AAB89' },
      { title: 'Completed Milestones', value: 45, icon: 'check_circle', color: '#2E8B57' },
      { title: 'Total Users', value: 1500, icon: 'people', color: '#ff0000' },
      { title: 'Active Projects', value: 75, icon: 'folder_open', color: '#228B22' },
      { title: 'Pending Tasks', value: 320, icon: 'assignment_late', color: '#9AAB89' },
    ];
  }

}
