import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { <%- upperName %>, <%- upperName %>Interface } from '../../_shared/models/<%- lowerName %>';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class <%- upperName %>Service {
  private API = environment.API_URL + '/<%- lowerNamePlural %>';
  constructor(private http: HttpClient) { }

  find(): Observable<<%- upperName %>Interface[]> {
    return this.http.get<any>(this.API).pipe(
      map(<%- lowerNamePlural %> => <%- lowerNamePlural %>.data),
      tap(<%- lowerNamePlural %> => console.log(`fetched <%- lowerNamePlural %> `, <%- lowerNamePlural %>)),
      catchError(this.handleError('find<%- upperName %>', []))
      );
  }

  create(new<%- upperName %>?: <%- upperName %>Interface): Observable<<%- upperName %>> {
    const url = this.API;
    return this.http.post<any>(url, new<%- upperName %>, httpOptions).pipe(
      tap((<%- lowerName %>: <%- upperName %>Interface) => console.log(`New <%- upperName %>: ${<%- lowerName %>.<%- idDefault %>}`)),
      catchError(this.handleError<<%- upperName %>>('create <%- upperName %>'))
      );
  }

  update(data?: <%- upperName %>Interface): Observable<<%- upperName %>> {
    const <%- lowerName %>Updated = new <%- upperName %>(data);
    const url = this.API + '/' + <%- lowerName %>Updated.<%- idDefault %>;

    return this.http.put<any>(url, <%- lowerName %>Updated, httpOptions).pipe(
      tap((<%- lowerName %>: <%- upperName %>) => console.log(`<%- upperName %> updated: ${<%- lowerName %>.<%- idDefault %>}`)),
      catchError(this.handleError<<%- upperName %>>('update <%- upperName %>'))
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
