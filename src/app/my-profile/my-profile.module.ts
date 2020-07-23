import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { MyProfilePageRoutingModule } from './my-profile-routing.module';

import { MyProfilePage } from './my-profile.page';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	  TranslateModule,   
    MyProfilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MyProfilePage, ProfileModalComponent], 
  entryComponents : [ProfileModalComponent]
})
export class MyProfilePageModule {}
