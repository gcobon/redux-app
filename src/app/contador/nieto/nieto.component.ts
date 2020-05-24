import { AppState } from './../../app.reducers';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html'
})
export class NietoComponent implements OnInit {

  public contador:number;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
    .subscribe(contador => this.contador = contador);
  }

  reset(){
    const action = new ResetAction();
    this.store.dispatch(action);
  }

}
