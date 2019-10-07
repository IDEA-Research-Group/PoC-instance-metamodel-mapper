import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesInstancesService {

  endPointCamunda: string = 'history/activity-instance';

  constructor(private api: ApiService) { }

  // ---------------------------------------------------------------------
  // Camunda endPoints----------------------------------------------------
  getListCount (params = null): Observable<any> {
    return this.api.get(this.endPointCamunda + '/count', params)
      .pipe(
        tap(res => console.info('getListCount done')),
        catchError(this.handleError('getListCount', [])),
      );
  }

  getList (params = null): Observable<any> {
    console.info(params);
    return this.api.get(this.endPointCamunda, params)
      .pipe(
        tap(res => console.info('getList done')),
        catchError(this.handleError('getList', [])),
      );
  }

  getOneById (activity_id): Observable<any> {
    return this.api.get(this.endPointCamunda + '/' + activity_id )
      .pipe(
        tap(res => console.info('getOneById done')),
        catchError(this.handleError('getOneById', [])),
      );
  }

  getListByDate (params = null): Observable<any> {
    console.info(params);
    return this.api.get(this.endPointCamunda + '/date/', params)
      .pipe(
        tap(res => console.info('getListByDate done')),
        catchError(this.handleError('getListByDate', [])),
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
