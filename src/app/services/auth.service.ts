import { inject, Injectable } from '@angular/core';
import { collection, Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private _firestore = inject(Firestore)
  private _collection = collection(this._firestore, 'Usuarios')

  login(user:any){
    console.log(user)
    const getUsers = collectionData(this._collection) as Observable<any>
    console.log(getUsers, 'listado de usuarios?')
  }
}
