import { Component } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public isMenuOpen$ = this.layoutService.menuOpen$;

  constructor(private layoutService: LayoutService) { }
}
