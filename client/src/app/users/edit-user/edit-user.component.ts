import { Router } from '@angular/router';
import { LeadService } from './../../lead.service';
import { TokenPayload, AuthenticationService } from './../../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router, 
    private leadService: LeadService) { }

  ngOnInit() {
    this.getUser();
  }

  credentials;

  getUser() {
    this.credentials = this.leadService.getUser();
  }

  updateUser() {
    console.log(this.credentials);
    this.auth.updateUser(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/users');
    }, (err) => {
      console.error(err);
    });
  }
}
