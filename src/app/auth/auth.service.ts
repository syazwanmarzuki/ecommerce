import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from } from 'rxjs';
import { AlertController, BooleanValueAccessor } from '@ionic/angular';
import { User } from './user.model';
import { Plugins } from '@capacitor/core';
import { tap, map } from 'rxjs/operators';
import { stringify } from 'querystring';


export interface authResponseData{
  user_id : string;
  email : string;
  valid : boolean;
  message : string;
  fullname : string;
  session_id : string;
  phoneno : string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url : string = "http://ecommerce.x-cow.com/api/action.php";
  private _user = new BehaviorSubject<User>(null);
 


  constructor(
    private http : HttpClient,
    private alertCtrl : AlertController
  ) { }

  register(data : any){
    let formData = new FormData();
    formData.append('action', 'register');

    formData.append('fullname', data.fullname);
    formData.append('email', data.email);
    formData.append('phoneno', data.phoneno);
    formData.append('password', data.password);

    return this.http.post<{valid: boolean, msg : string}>(
      this._url,
      formData
    );
  }

  login(email : string, password : string){
    let formData = new FormData();
    formData.append('action', 'userLogin');
    formData.append('email' , email);
    formData.append('password', password);

    return this.http.post<authResponseData>(
      this._url,
      formData
    ).pipe(tap(resData => {
      if (resData.valid){
        this.setUserData(resData.user_id, resData.email, resData.fullname, resData.session_id, resData.phoneno);
      }
    }));
  }

  autoLogin(){
    return from(Plugins.Storage.get({key: 'authData'})).pipe(
      map(storeData => {
        if(!storeData || !storeData.value){
          return null;
        }

        const parsedData = JSON.parse(storeData.value) as {
          fullname :string;
          user_id : string;
          session_id : string;
          email : string;
          phoneno : string;
        };

        this.getUserDetail(parsedData.user_id, parsedData.session_id, parsedData.email);

        const user = new User(
          parsedData.fullname,
          parsedData.user_id,
          parsedData.email,
          parsedData.session_id,
          parsedData.phoneno
        );

        return user;
      }),
      tap(user => {
        this._user.next(user);
      }),
      map(agent => {
        return !!agent;
      })
    )
  }

  getUserDetail(email : string, session_id : string, user_id : string){
    let formData = new FormData();
    formData.append('action', 'getUserDetail');
    formData.append('email', email);

    this.http.post<{fullname : string, phoneno : string}>(
      this._url,
      formData
    ).subscribe(resData => {
      this.setUserData(email, user_id, session_id, resData.fullname, resData.phoneno);

    });
  }

  get UserIsAuthenticated(){
    return this._user.asObservable().pipe(map(user => {
      if (user){
        return true;
      }
      else{
        return false;
      }
    })
    )
  }


  setUserData(user_id : string, fullname : string, email : string, session_id : string, phoneno : string){
    this._user.next(new User(user_id, fullname, email, session_id, phoneno));
    this.storeAuthData(user_id, fullname, email, session_id, phoneno);
  }

  storeAuthData(user_id : string, fullname : string, email : string, session_id : string, phoneno : string){
    const data = JSON.stringify({ user_id : user_id, fullname : fullname, email : email, session_id : session_id, phoneno : phoneno});
    Plugins.Storage.set({
      key:'authData', value: data
    })
  }

  logout(){
    this._user.next(null);
    Plugins.Storage.remove({key: 'authData'});
  }
}
