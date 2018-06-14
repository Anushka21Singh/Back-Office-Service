import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import {Users} from "./Users";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';
import { Data } from '../../data';
import {LOCAL_STORAGE, StorageServiceModule} from 'angular-webstorage-service'
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Session } from 'protractor';
import { HttpResponse } from 'selenium-webdriver/http';
import { Response, ResponseOptions } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginServiceService,AuthGuard]
})
export class LoginComponent implements OnInit {
   members: any;
  constructor(private loginData: LoginServiceService, private router:Router,private auth: AuthService ) { 
    console.log("Inside Constructor login");
  }

  ngOnInit() { 
    console.log("Inside Init");
  }

  onValidation(){

  }


  loginUsers(email,password){

    console.log("Inside component getAllFunction");

    this.loginData.getAll(email,password).subscribe(res => {

      if(res[0].status == "1"){
        sessionStorage.setItem("value","true");
        // localStorage.setItem("name",this.members[i].Firstname);
        localStorage.setItem("Role",res[0].Role);
        console.log("before dashboard");
              this.router.navigate(['dashboard']);
       }
    });
  }
 

  onSubmit(x: NgForm){
    console.log("submit "+x.value.email);
     console.log("password "+x.value.psw);
     this.loginUsers( x.value.email,x.value.psw);
 }

}
