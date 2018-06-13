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
    console.log("Inside Constructor");
    //this.getAll();
  }

  ngOnInit() { 
    console.log("Inside Init");
  }

  onValidation(){

  }


  loginUsers(email,password){

    console.log("Inside component getAllFunction");

    this.loginData.getAll(email,password).subscribe(res => {
      
    this.members =res;

    console.log(" returned Inside  component getAllFunction");
        this.auth.setLogedIn();
        console.log("set: "+this.auth.getLoggedIn());
        // sessionStorage.setItem("value","true");
      //   localStorage.setItem("name",this.members[i].Firstname);
      //   localStorage.setItem("Role",this.members[i].Role);
      //   console.log("before dashboard");
      //         this.router.navigate(['dashboard']);
      //         break;
      //  }
      
  //  }
    });
  }
  

  // getAll() {
  //   console.log("Inside component getAllFunction");
   
  //   this.loginData.getAll().subscribe(res => {
  //   this.members = res;
  //   console.log(res);
  //   console.log(" returned Inside  component getAllFunction");
  //    console.log(this.members[0].username);
  //   });
  // }

  // onSubmit(userN : String , passW : String)
  // {
  //   this.members.username = userN;
  //   this.members.password = passW;
  //   console.log("onSubmit"+userN);
  //   this.loginData.addData(userN,passW);

  // }

  onSubmit(x: NgForm){
    console.log("submit "+x.value.email);
    // this.members.username = x.value.uname;
    // this.members.password=x.value.psw;
     console.log("password "+x.value.psw);
    // this.loginData.addData(this.members.username,this.members.password);
     this.loginUsers( x.value.email,x.value.psw);

//     if( x.value.uname == 'admin' && x.value.psw == 'admin')  
// {
//   console.log.("if Conditional.");
//   this.auth.setLogedIn();
//   console.log("set: "+this.auth.getLoggedIn());
  

//         this.router.navigate(['dashboard']);
// } 
 }

}
