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
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
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
    DashboardComponent
  ],
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [LoginServiceService , AuthGuard,AuthService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
