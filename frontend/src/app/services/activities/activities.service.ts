import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ProcessDefinition} from '../../models/processDefinition';
import {Activity} from '../../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  endPoint: string = 'activities/';

  constructor(private api: ApiService) { }

  getAll (): Observable<any> {
    return this.api.get(this.endPoint)
      .pipe(
        tap(proccessEngines => console.info('fetched Activities')),
        catchError(this.handleError('getProcDefs', [])),
      );
  }
  getByProcessId(id): Observable<any> {

    return this.api.get(`processDefinition/${id}/activities`)
      .pipe(
        tap(proccessEngines => console.info('fetched activities')),
        catchError(this.handleError('getByProcessId', [])),
      );
  }
  store(activity: Activity): Observable<any> {
    return this.api.post(this.endPoint, activity).pipe(
      // tap(procDef => console.info(`added activity w/ id=${procDef.id}`)),
      catchError(this.handleError<ProcessDefinition>('store')),
    );
  }
  update(activity: Activity): Observable<any> {
    return this.api.put(this.endPoint + activity.id, activity).pipe(
      tap(procDefi => console.info(`updated activity w/ updated=${activity.id}`)),
      catchError(this.handleError<ProcessDefinition>('update')),
    );
  }
  delete(activity: Activity): Observable<any> {
    return this.api.delete(this.endPoint + activity.id).pipe(
      // tap(procDef => console.info(`deleted activity w/ id=${procDef.id}`)),
      catchError(this.handleError<ProcessDefinition>('delete')),
    );
  }
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
