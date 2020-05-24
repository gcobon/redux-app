import { AppState } from './../../app.reducers';
import { MultiplicarAction, DividirAction } from './../contador.actions';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent implements OnInit {

  public contador:number;

  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('contador')
    .subscribe(contador => this.contador = contador);
  }

  multiplicar(){
    const action = new MultiplicarAction(5);
    this.store.dispatch(action);
  }

  dividir(){
    const action = new DividirAction(2);
    this.store.dispatch(action);
  }
}
