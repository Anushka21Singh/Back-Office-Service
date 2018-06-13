import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import {HttpModule, Http, Response, URLSearchParams , RequestOptions} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Users} from './Users';
import { AuthService } from '../auth.service';


@Injectable()
export class LoginServiceService {


  
  constructor(private _http : Http, private auth: AuthService) { 
    console.log("inside service login constructor");
  
  }
    

  getAll(){
    console.log("Inside service getAll");

    return this._http.get('login/getAll')
    .map(res =>{ 
       console.log("Inside http");
      //console.log( res.toString);
      console.log(" Returned Inside  http");
     
      
      return res.json()
      
     
    }
  );
}


addData(username,password)
{

  console.log("service username :"+username);
  console.log("service password :"+password);

  const obj={'username':username,'password': password};
  const url ="http://localhost:2020/login/addpost";

  this._http.post(url,obj).subscribe(
    res => {
      // show an alert to tell the user if product was created or not
      alert("Data Added Successfully"+ username);

      // go back to list of products
   },
   error => console.log(error)
  )
  console.log({'name':name});
}

}


