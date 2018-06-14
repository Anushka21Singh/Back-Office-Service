import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {LoginServiceService} from './login/login-service.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule  } from '@angular/forms';
import { AuthGuard } from './auth.guard';
//import { StorageServiceModule } from 'angular-webstorage-service';
import { AuthService } from './auth.service';
import { DashboardService } from './dashboard/dashboard.service';
import { AddUserEmailVerificationComponent } from './add-user-email-verification/add-user-email-verification.component';
import { AdduserEverifyService } from './add-user-email-verification/adduser-everify.service';
import { UserComponent } from './user/user.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/adduseremailverification', component: AddUserEmailVerificationComponent },
  { path: 'dashboard', canActivate: [AuthGuard],component: DashboardComponent },
{ path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddUserEmailVerificationComponent,
    UserComponent
  ],
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [LoginServiceService , AuthGuard,AuthService, DashboardService, AdduserEverifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
