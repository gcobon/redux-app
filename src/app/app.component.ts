import { AppState } from './app.reducers';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromContador from './contador/contador.actions';//importa todas las actions

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public contador:number;

  constructor(private store:Store<AppState>){
    this.store.select('contador')
    .subscribe(contador =>this.contador = contador);
  }

  incrementar(){
    const action = new fromContador.IncrementarAction();

    this.store.dispatch(action);
  }

  decrementar(){
    const action = new fromContador.DecrementarAction();
    this.store.dispatch(action);
  }

}
