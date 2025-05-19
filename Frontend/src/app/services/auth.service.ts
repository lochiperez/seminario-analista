import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:3000/api/usuarios'

  constructor(private httpClient:HttpClient) { }

 getUsuarios():Observable<any>{
  return this.httpClient.get(this.api)
 }
}
