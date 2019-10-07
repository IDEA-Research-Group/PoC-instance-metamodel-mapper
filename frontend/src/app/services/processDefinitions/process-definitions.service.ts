import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ProcessDefinition} from '../../models/processDefinition';

@Injectable({
  providedIn: 'root',
})
export class ProcessDefinitionsService {


  endPoint: string = 'processDefinitions/';
  endPointCamunda: string = 'process-definition/';

  constructor(private api: ApiService) {}

  getProcDefs (): Observable<any> {

    return this.api.get(this.endPoint)
      .pipe(
        tap(proccessEngines => console.info('fetched proccessEngines')),
        catchError(this.handleError('getProcDefs', [])),
      );
  }
  getProcDefsById (procEng_id): Observable<any> {

    return this.api.get(`engines/${procEng_id}/processDefinitions`)
      .pipe(
        tap(proccessEngines => console.info('fetched proccessEngines')),
        catchError(this.handleError('getProcDefsById', [])),
      );
  }

  addProcDefs (procDef: ProcessDefinition): Observable<any> {
    return this.api.post(this.endPoint, procDef).pipe(
      // tap(procDef => console.info(`added ProcessDefinition w/ id=${procDef.id}`)),
      catchError(this.handleError<ProcessDefinition>('addProcDef')),
    );
  }
  updateProcDef (procDef: ProcessDefinition): Observable<any> {
    return this.api.put(this.endPoint + procDef.id, procDef).pipe(
      tap(procDefi => console.info(`added ProcessDefinition w/ updated=${procDef.id}`)),
      catchError(this.handleError<ProcessDefinition>('updateProcDef')),
    );
  }

  deleteProcDef (procDef: ProcessDefinition): Observable<any> {
    return this.api.delete(this.endPoint + procDef.id).pipe(
      // tap(procDef => console.info(`added ProcessDefinition w/ id=${procDef.id}`)),
      catchError(this.handleError<ProcessDefinition>('deleteProcDef')),
    );
  }

  // ---------------------------------------------------------------------
  // Camunda endPoints----------------------------------------------------
  getProcessInstanceStatistics (): Observable<any> {
    return this.api.get(this.endPointCamunda + 'statistics')
      .pipe(
        tap(proccessEngines => console.info('fetched process instances statistics')),
        catchError(this.handleError('getProcessInstanceStatistics', [])),
      );
  }
  getActivityInstanceStatistics (process_definition_id): Observable<any> {
    return this.api.get(this.endPointCamunda + process_definition_id + '/statistics')
      .pipe(
        tap(proccessEngines => console.info('getActivityInstanceStatistics done')),
        catchError(this.handleError('getActivityInstanceStatistics', [])),
      );
  }
  getOneById (process_definition_id): Observable<any> {
    return this.api.get(this.endPointCamunda + process_definition_id )
      .pipe(
        tap(proccessEngines => console.info('getOneById done')),
        catchError(this.handleError('getOneById', [])),
      );
  }
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
