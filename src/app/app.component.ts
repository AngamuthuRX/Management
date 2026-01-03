import { Component } from '@angular/core';
import { CommonService } from './shared/service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isAuthPage = true;

  constructor(private commonService: CommonService) {
    this.commonService.user$.subscribe(user => {
      const data = localStorage.getItem('user') ?? '';
      if (data) {
        this.isAuthPage = (data !== 'AuthenticatedUser');
      }
    });
  }
}
