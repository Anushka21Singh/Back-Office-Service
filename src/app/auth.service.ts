import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private isLoggedIn;

  constructor(private myRoute: Router ) {
    console.log("inside Authservice login constructor");

    this.isLoggedIn=false;
    console.log("set false");
   }

    setLogedIn()
    {
      console.log("set " );
      this.isLoggedIn=true;
    }

    getLoggedIn()
    {
      console.log("get");

      return this.isLoggedIn;
    }

}
