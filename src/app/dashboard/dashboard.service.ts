import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import {HttpModule, Http, Response, URLSearchParams , RequestOptions} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class DashboardService {

  constructor(private _http : Http) { }

  searchV(value)
  {
    let params: URLSearchParams = new URLSearchParams();
    params.set("value", value);
    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    console.log("inside search service");
    return this._http.get("dashboard/search",requestOptions)
    .map(res =>{ 
      console.log("Inside dashboard http"+value);
     return res.json()
    }
  );
  }

}
