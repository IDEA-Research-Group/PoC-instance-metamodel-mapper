import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ApiService} from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessInstancesService {

  endPointCamunda: string = 'process-instance/';

  constructor(private api: ApiService) { }

  // ---------------------------------------------------------------------
  // Camunda endPoints----------------------------------------------------
  getListCount (params = null): Observable<any> {
    return this.api.get(this.endPointCamunda + 'count', params)
      .pipe(
        tap(proccessEngines => console.info('getListCount done')),
        catchError(this.handleError('getListCount', [])),
      );
  }

  getList (params = null): Observable<any> {
    return this.api.get(this.endPointCamunda, params)
      .pipe(
        tap(proccessEngines => console.info('getList done')),
        catchError(this.handleError('getList', [])),
      );
  }

  getOneById (process_instance_id): Observable<any> {
    return this.api.get(this.endPointCamunda + process_instance_id )
      .pipe(
        tap(proccessEngines => console.info('getOneById done')),
        catchError(this.handleError('getOneById', [])),
      );
  }

  getActivityInstances (process_instance_id): Observable<any> {
    return this.api.get(this.endPointCamunda + process_instance_id + '/activity-instances')
      .pipe(
        tap(proccessEngines => console.info('getActivityInstances')),
        catchError(this.handleError('getActivityInstances', [])),
      );
  }
  getActivityInstancesStatistics (process_instance_id): Observable<any> {
    return this.api.get(this.endPointCamunda + process_instance_id + '/statistics')
      .pipe(
        tap(proccessEngines => console.info('getActivityInstancesStatistics')),
        catchError(this.handleError('getActivityInstancesStatistics', [])),
      );
  }

  // End Camunda Endpoints--------------------------------------------------
  // ---------------------------------------------------------------------

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
