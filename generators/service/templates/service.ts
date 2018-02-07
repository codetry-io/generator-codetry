import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { <%- modelo %>, <%- modelo %>Interface } from '../../_shared/models/<%- serviceName %>';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class <%- modelo %>Service {
  private API = environment.API_URL + '/<%- serviceNamePlural %>';
  constructor(private http: HttpClient) { }

  find(): Observable<<%- modelo %>Interface[]> {
    return this.http.get<any>(this.API).pipe(
      map(<%- serviceNamePlural %> => <%- serviceNamePlural %>.data),
      tap(<%- serviceNamePlural %> => console.log(`fetched <%- serviceNamePlural %> `, <%- serviceNamePlural %>)),
      catchError(this.handleError('find<%- modelo %>', []))
      );
  }

  create(new<%- modelo %>?: <%- modelo %>Interface): Observable<<%- modelo %>> {
    const url = this.API;
    return this.http.post<any>(url, new<%- modelo %>, httpOptions).pipe(
      tap((<%- serviceName %>: <%- modelo %>Interface) => console.log(`New <%- modelo %>: ${<%- serviceName %>.<%- id %>}`)),
      catchError(this.handleError<<%- modelo %>>('create <%- modelo %>'))
      );
  }

  update(data?: <%- modelo %>Interface): Observable<<%- modelo %>> {
    const <%- serviceName %>Updated = new <%- modelo %>(data);
    const url = this.API + '/' + <%- serviceName %>Updated.<%- id %>;

    return this.http.put<any>(url, <%- serviceName %>Updated, httpOptions).pipe(
      tap((<%- serviceName %>: <%- modelo %>) => console.log(`<%- modelo %> updated: ${<%- serviceName %>.<%- id %>}`)),
      catchError(this.handleError<<%- modelo %>>('update <%- modelo %>'))
    );
  }

  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
