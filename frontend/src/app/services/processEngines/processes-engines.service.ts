import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {ProcessEngine} from '../../models/processEngine';
import {Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {ToasterService} from 'angular2-toaster';

@Injectable({
  providedIn: 'root',
})
export class ProcessesEnginesService {

  endPoint: string = 'engines/';

  constructor(private api: ApiService,
              private toasterService: ToasterService) {}

  getProcEng (id): Observable<any> {
    return this.api.get(this.endPoint  + id)
      .pipe(
        tap(proccessEngines => console.info('fetched proccessEngine')),
        catchError(this.handleError('getProcEng', [])),
      );
  }

  getProcEngs (): Observable<any> {
    return this.api.get(this.endPoint)
      .pipe(
        tap(proccessEngines => console.info('fetched proccessEngines')),
        catchError(this.handleError('getProcEngs', [])),
      );
  }
  addProcEng (procEng: ProcessEngine): Observable<any> {
    return this.api.post(this.endPoint, procEng).pipe(
      // tap(procEng => console.info(`added ProcessEngine w/ id=${procEng.id}`)),
      catchError(this.handleError<ProcessEngine>('addProcEng')),
    );
  }
  updateProcEng (procEng: ProcessEngine): Observable<any> {
    return this.api.put(this.endPoint + procEng.id, procEng).pipe(
      // tap(procEng => console.info(`added ProcessEngine w/ id=${procEng.id}`)),
      catchError(this.handleError<ProcessEngine>('updateProcEng')),
    );
  }
  delete (engine: ProcessEngine): Observable<any> {
    console.info('deleting');
    console.info(engine.id);
    console.info(this.endPoint + engine.id);
    return this.api.delete(this.endPoint + engine.id).pipe(
      // tap(procEng => console.info(`added ProcessEngine w/ id=${procEng.id}`)),
      catchError(this.handleError<ProcessEngine>('deleteProcEng')),
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
      this.toasterService.pop('error', 'Error', 'Uppps! There has been an error');
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
