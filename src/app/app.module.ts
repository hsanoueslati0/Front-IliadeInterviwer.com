import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HomeUserComponent } from './navbar-user/navbar-user.component';
import { PolitiquePageComponent } from './politique-page/politique-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { CreationUnExamComponent } from './creation-un-exam/creation-un-exam.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserPageComponent,
    HomeUserComponent,
    PolitiquePageComponent,
    StartPageComponent,
    AdminPageComponent,
    AddUserComponent,
    ProfileAdminComponent,
    NavbarAdminComponent,
    CreationUnExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
