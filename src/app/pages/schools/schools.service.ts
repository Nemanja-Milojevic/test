import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(private http: HttpClient) { }

  getOrganizations(){
    return this.http.get<any>(environment.apiBaseUrl+'/api/v1/organizations')
  }
}
