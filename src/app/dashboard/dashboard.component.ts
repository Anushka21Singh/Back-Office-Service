import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Users } from '../login/Users';
import { Data } from '../../data';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { NgForm } from '@angular/forms';
import { FormsModule  } from '@angular/forms';
import { AuthGuard } from '../auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardService,AuthGuard]
})
export class DashboardComponent implements OnInit {

  members: Users;
public AdminRole=false;;  public OperatorRole = false;

  constructor(private auth:AuthService, private Route:Router, private dashboard: DashboardService) { 
    this.OperatorRole=false;
    this.AdminRole=false;
    const name= localStorage.getItem("name");
    const role= localStorage.getItem("Role");
    this.initialF(role);
    console.log("inside dashboard"+name+role);
  } 

  ngOnInit() {
  
  }
  initialF(role)
  {
  if(role=="Admin")
  {
    this.AdminRole=true;
    console.log("Admin if"+ this.AdminRole);
  }
  else
  {
    this.OperatorRole=true;
    console.log("Operator if"+ this.OperatorRole);

  }
    
  }

  logOut()
  {
    console.log("inside logout");
    localStorage.clear();
    sessionStorage.setItem("name","false");
    this.Route.navigate(['login']);

  }

  searchV(val: NgForm){
    console.log("inside search"+val.value.search);
      this.dashboard.searchV(val.value.search).subscribe(res => {
       this.members = res;
        console.log(res);
        console.log(" returned Inside  dashboard component SearchFunction");
        // console.log(this.members[0].username);
        });
  }

}
