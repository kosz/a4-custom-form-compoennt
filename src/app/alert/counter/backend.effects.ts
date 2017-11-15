import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { environment } from 'environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/interval';


@Injectable()
export class BackendEffects {

  constructor(
    private http: Http,
    private actions: Actions,
    private store: Store<any>
  ) {}

  @Effect()
  werthkh = this.actions
    .ofType('REQUEST')
    .switchMap(payload => this.http.get('http://localhost:5000/my')
                            .map(res => ({
                              type: 'RESPONSE',
                              payload: res.json()
                            }))
                            .catch(() => Observable.of({
                              type: 'ERROR'
                            })));
} 

