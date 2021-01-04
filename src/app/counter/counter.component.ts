import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 's4j-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = this.store.select('count')
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment())
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement())
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset())
  }

}
