import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as Icons from '@fortawesome/free-solid-svg-icons';
import { CONFIG } from 'src/app/shared/constant/side-menu';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public sideMenuItems: any[] = [];

  public isMenuOpen = false;

  public isMenuOpen$ = this.layoutService.menuOpen$;

  constructor(private router: Router, private layoutService: LayoutService) {
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
