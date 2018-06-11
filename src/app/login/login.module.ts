import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginServiceService } from './login-service.service';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormsModule],
  declarations: [LoginComponent],
  providers: [LoginServiceService, AuthGuard,AuthService]
})
export class LoginModule { }
