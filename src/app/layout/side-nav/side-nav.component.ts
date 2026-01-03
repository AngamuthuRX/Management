import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as Icons from '@fortawesome/free-solid-svg-icons';
import { CONFIG } from 'src/app/shared/constant/side-menu';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public sideMenuItems: any[] = [];

  constructor(private router: Router) {
    this.sideMenuItems = CONFIG.SIDE_MENU;
  }

  ngOnInit(): void {
  }

  getIcon(iconName: string): any {
    return (Icons as any)[iconName] || Icons.faQuestion;
  }

  onSelectMenu(item: any): void {
    this.router.navigate([item.route]);
  }
}
