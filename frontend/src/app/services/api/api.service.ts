import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {


url: string = 'http://mquery.test/api';

constructor(public http: HttpClient) {

}

get(endpoint: string, params?: any, reqOpts?: any) {
  if (!reqOpts) {
    reqOpts = {
      params: new HttpParams(),
    };
  }

  // Support easy query params for GET requests
  if (params) {
    reqOpts.params = new HttpParams();
    for (const k in params) {
      if (params.hasOwnProperty(k)) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
  }
  console.info('Consultando a:');
  console.info(this.url + '/' + endpoint);
  return this.http.get(this.url + '/' + endpoint, reqOpts);
}

post(endpoint: string, body: any, reqOpts?: any) {
  return this.http.post(this.url + '/' + endpoint, body, reqOpts);
}

put(endpoint: string, body: any, reqOpts?: any) {
  // Default method is the next line:
  // return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  // For laravel we need to use a wrapper using method field with put value, using Post request
  body._method = 'PUT';
  return this.http.post(this.url + '/' + endpoint, body, reqOpts);

}

delete(endpoint: string, reqOpts?: any) {
  return this.http.delete(this.url + '/' + endpoint, reqOpts);
}

patch(endpoint: string, body: any, reqOpts?: any) {
  return this.http.put(this.url + '/' + endpoint, body, reqOpts);
}

}
