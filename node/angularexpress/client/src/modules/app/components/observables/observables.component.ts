import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fromEvent, interval } from 'rxjs';
import { switchMap, mergeMap, concatMap, exhaustMap, debounceTime, tap } from 'rxjs/operators';

@Component({
  standalone:false,
  selector: 'app-observables-example',
  templateUrl: './observables.component.html'
})
export class ObservablesComponent {
  searchCtrl = new FormControl('');
  searchResult: any = null;
  parallelData: any[] = [];
  saveLog: string[] = [];
  loginStatus = '';

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.setupSwitchMapSearch();
    this.setupMergeMapParallelLoad();
    this.setupConcatMapSaveQueue();
    this.setupExhaustMapLogin();
  }

  // -------------------------------------------------------
  // 1️⃣ SWITCHMAP — Type-ahead Search (Cancels previous call)
  // -------------------------------------------------------
  setupSwitchMapSearch() {
    this.searchCtrl.valueChanges.pipe(
      debounceTime(300),
      switchMap(query =>
        this.http.get(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
      )
    ).subscribe(result => {
      this.searchResult = result;
    });
  }

  // -------------------------------------------------------
  // 2️⃣ MERGEMAP — Parallel HTTP calls (No cancellation)
  // -------------------------------------------------------
  setupMergeMapParallelLoad() {
    const btn = document.querySelector('button:nth-of-type(1)')!;

    fromEvent(btn, 'click').pipe(
      mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/posts/1')),
      mergeMap((post:any) => this.http.get(`https://jsonplaceholder.typicode.com/users/${post['userId']}`)),
    )
    .subscribe(final => {
      this.parallelData.push(final);
    });
  }

  // -------------------------------------------------------
  // 3️⃣ CONCATMAP — Sequential Save Queue
  // -------------------------------------------------------
  setupConcatMapSaveQueue() {
    const btn = document.querySelector('button:nth-of-type(2)')!;

    fromEvent(btn, 'click').pipe(
      concatMap(() =>
        this.http.post('https://jsonplaceholder.typicode.com/posts', {
          time: new Date().toISOString()
        }).pipe(
          tap(() => this.saveLog.push('Saved at ' + new Date().toLocaleTimeString()))
        )
      )
    ).subscribe();
  }

  // -------------------------------------------------------
  // 4️⃣ EXHAUSTMAP — Prevent Double Login Click
  // -------------------------------------------------------
  setupExhaustMapLogin() {
    const btn = document.querySelector('button:nth-of-type(3)')!;

    fromEvent(btn, 'click').pipe(
      exhaustMap(() => {
        this.loginStatus = 'Logging in...';
        return this.http.get('https://jsonplaceholder.typicode.com/users/1');
      })
    ).subscribe((result:any) => {
      this.loginStatus = `Logged in: ${result['name']}`;
    });
  }
}
