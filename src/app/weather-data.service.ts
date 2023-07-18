import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  headers: HttpHeaders = new HttpHeaders(
    {
      'X-RapidAPI-Key': 'de629fbe19mshb8e26b226b055a7p17013ejsn3a745c6119d0',
      'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
    }
  )
  constructor(public _HttpClient:HttpClient) { }
  getData(cityname:string):Observable<any>
  {
    return this._HttpClient.get(`https://forecast9.p.rapidapi.com/rapidapi/forecast/${cityname}/hourly/`,
    {
      headers:this.headers
    })
  }
}
