import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/app';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  ngFireAuth: any;
 

  constructor(public auth: AngularFireAuth,private httpClient:HttpClient) { }
  

  loginFireauth(value){
    return new Promise<any> ( (resolve, reject)=>{
      this.auth.signInWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
   }

   



  RegisterUser(form) {
     return this.auth.createUserWithEmailAndPassword(form.email, form.password);
     
  }

  addProfile(user):Observable<any>{
    return this.httpClient.post('https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/users.json',user)
  }


}
