import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdduserEverifyService } from './adduser-everify.service';

@Component({
  selector: 'app-add-user-email-verification',
  templateUrl: './add-user-email-verification.component.html',
  styleUrls: ['./add-user-email-verification.component.css']
})
export class AddUserEmailVerificationComponent implements OnInit {

  constructor( private AddUser: AdduserEverifyService) { }

  ngOnInit() {
  }

  AddUserV(val: NgForm)
  {
    this.AddUser.AddUser(val.value.email,val.value.role);
    
  }
}
