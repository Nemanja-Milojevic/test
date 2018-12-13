import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdddeviceService {

  constructor(private http: HttpClient) { }

  addDevice(data){

    let headers = new HttpHeaders({
      'Content-Type':  'application/json'
    })

    
    console.log(data)

    return this.http.post<any>(environment.apiBaseUrl+'/api/v1/devices', data, {headers: headers})
  }
}
