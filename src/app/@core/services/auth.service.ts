import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/x-www-form-urlencoded'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public client_id = '5KYMVLRSOCCO34VPN0R73J6BHSM0AL.activepoints';
  public secret = '$2a$04$0AeyCQmMNHaIV1Zb0mUp5.i9ipTgR8TYCb1zslEbu8f5S5vkal4wK'

  constructor(private http: HttpClient) { }

  login(data){
    let b64 = btoa(this.client_id + ':' + this.secret)
    let headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + b64
    })

    let body = 'username='+data.username+'&password='+data.password+'&grant_type=password'

    return this.http.post<any>(environment.apiBaseUrl+'/oauth/token', body, {headers: headers})
  }

  getToken(){
    return sessionStorage.getItem('token')
  }

  loggedIn(){
    return !!sessionStorage.getItem('token')
  }

  getRole(){
    return sessionStorage.getItem('role')
  }

}
