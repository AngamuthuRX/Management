import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private layoutService: LayoutService) { }

  onBurgerClick() {
    this.layoutService.toggleMenu();
  }
}
