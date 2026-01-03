import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private userSubject = new BehaviorSubject<string>('Guest');

  user$: Observable<string> = this.userSubject.asObservable();

  updateUser(newName: string) {
    this.userSubject.next(newName);
  }
}
