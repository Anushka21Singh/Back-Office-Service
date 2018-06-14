import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AdduserEverifyService {

  constructor(private _http: Http, private Route: Router) { }

  AddUser(email,role)
  {
    console.log("fname: "+email);
    const obj={'email': email, 'role': role};
  const url ="http://localhost:2020/dashboard/adduseremailverification/adduserV";

  this._http.post(url,obj).subscribe(
    res => {
      // show an alert to tell the user if product was created or not
      alert("Data Added Successfully");
      this.Route.navigate(['dashboard']);

   },
   error => console.log(error)
  )
  console.log({'name':name});
}
  

}
