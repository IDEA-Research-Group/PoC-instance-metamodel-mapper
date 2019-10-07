import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {DBConnection} from '../../models/db-connection';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabasesService {

  endPoint: string = 'db/';

  constructor(private api: ApiService) { }

  getDbConnections(): Observable<any> {
    return this.api.get(this.endPoint + 'connections')
      .pipe(
        tap(res => console.info('fetched connections')),
        catchError(this.handleError('getDBConnections', [])),
      );
  }
  getAllTablesFields(connection: DBConnection): Observable<any> {
    return this.api.get(this.endPoint + 'all-tables-fields', {'connection': connection.connection, 'driver': connection.driver})
      .pipe(
        tap(res => console.info('fetched All Tables and Fields')),
        catchError(this.handleError('getAllTablesFields', [])),
      );
  }

  getOneTableFields(table: string, connection: DBConnection) {

  }


  getAllTables(connection: DBConnection) {

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.info(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
