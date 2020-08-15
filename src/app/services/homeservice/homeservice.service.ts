import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import * as json from 'assets/json/sample-data.json';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public baseUrl = 'google.com'
  public data: any = json;
  constructor(public http: HttpClient) { }

  public getAboutData() {
    console.log('Api Being called');
    return this.http.get('https://reqres.in/api/users/2');
  }
}
