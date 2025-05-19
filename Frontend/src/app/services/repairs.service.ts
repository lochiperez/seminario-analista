import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepairsService {

  private api = 'http://localhost:3000/api/repairs'

  constructor(private httpClient:HttpClient) { }

 getRepairs():Observable<any>{
  return this.httpClient.get(this.api)
 }
}
