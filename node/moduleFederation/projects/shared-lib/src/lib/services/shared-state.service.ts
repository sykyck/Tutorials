import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {

  private stateSubject = new BehaviorSubject<Record<string, any>>({});
  state$: Observable<Record<string, any>> = this.stateSubject.asObservable();

  setState(key: string, value: any) {
    const current = this.stateSubject.value;
    this.stateSubject.next({
      ...current,
      [key]: value
    });
  }

  getState<T = any>(key: string): T | undefined {
    return this.stateSubject.value[key];
  }

  clear() {
    this.stateSubject.next({});
  }
}
