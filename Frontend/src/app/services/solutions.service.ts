import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {

  private api = 'http://localhost:3000/api/solutions'

  constructor(private httpClient:HttpClient) { }

 getSolutions():Observable<any>{
  return this.httpClient.get(this.api)
 }
}
