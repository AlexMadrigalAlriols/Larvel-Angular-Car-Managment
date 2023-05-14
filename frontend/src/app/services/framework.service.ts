import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8000/api/v1';
var header = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
});

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {

  constructor(private http: HttpClient) { }

  get(url: string, auth: boolean = true) {
    if(auth) {
        header = new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        });
      }
    return this.http.get(`${baseUrl}/${url}`, {headers: header});
  }

  post(url: string, body: any, auth: boolean = true) {
    if(auth) {
      header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      });
    }

    return this.http.post(`${baseUrl}/${url}`, body, {headers: header});
  }

  delete(url: string, auth: boolean = true) {
    if(auth) {
      header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      });
    }

    return this.http.delete(`${baseUrl}/${url}`, {headers: header});
  }
}
