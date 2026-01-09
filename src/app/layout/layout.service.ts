import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private menuOpen = new BehaviorSubject<boolean>(false);
  menuOpen$ = this.menuOpen.asObservable();

  toggleMenu() {
    this.menuOpen.next(!this.menuOpen.value);
  }
}
