import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { switchMap, take } from 'rxjs/operators';
import { NumericValueAccessor } from '@ionic/angular';


interface userProfileData {
  user_id : number;
  email : string;
  fullname : string;
  phoneno : string;
  registerAt : string;
  home_address : string;
  office_address : string;
  other_address : string;
}

interface updateUserProfileData {
  valid : Boolean,
  update_fullname : string,
  update_email : string,
  update_phoneno : string
}
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _url : string = "http://ecommerce.x-cow.com/api/action.php";

  constructor(
    private http : HttpClient,
    private authService : AuthService
  ) { }

  getProfileData(){
    return this.authService.userId.pipe(
      take(1),
      switchMap(user_id => {
        let formData = new FormData();
        formData.append("action", "getProfileDataById");
        formData.append("user_id", user_id);

        return this.http.post<userProfileData>(this._url, formData);
      })
    )
  }

  updateProfile(category: number, value : any){
    return this.authService.userId.pipe(
      take(1),
      switchMap(user_id => {
        let formData = new FormData();
        formData.append('action', 'updateProfile');
        formData.append('user_id', user_id);
        formData.append('category', category.toString());

        if (category == 1){
          formData.append('fullname', value.fullname);
          formData.append('email', value.email);
          formData.append('phoneno', value.phoneno);
        }
        else if (category == 2){
          formData.append('home_address', value.home_address);
          formData.append('office_address', value.office_address);
          formData.append('other_address', value.other_address);
        }

        return this.http.post<updateUserProfileData>(this._url, formData);
      })
    )
  }
}
