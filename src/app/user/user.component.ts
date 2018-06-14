import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private  user:UserService) { }

  ngOnInit() {
  }

  UserV(val : NgForm)
  {
    this.user.UserV(val.value.Fname, val.value.Lname,val.value.pasw);
  }

}
