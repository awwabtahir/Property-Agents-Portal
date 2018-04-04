import { Router } from '@angular/router';
import { LeadService } from './../../lead.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService, Status } from '../../authentication.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router,
    private leadService: LeadService) { }

  ngOnInit() {
    this.getStatus();
    this.getStatusTypes();
    this.getLead();
    this.setIsAdmin();
  }

  statusID;
  leadID;
  isAdmin;

  setIsAdmin() {
    if(this.auth.isAdmin) this.isAdmin = true;
    else this.isAdmin = false;
  }

  getStatus() {
    this.statusID = this.leadService.getStatusID();
  }

  getLead() {
    this.leadID = this.leadService.getLeadID();
  }

  statusTypes;
  
  getStatusTypes() {
    this.auth.getStatusTypes().subscribe(statusTypes => {
      this.statusTypes = statusTypes.filter(function (statusTypes) {
        return statusTypes._id !== 0;
      });
    }, (err) => {
      console.error(err);
    });
  }

  updateStatus() {

    let status: Status = {
      "sid" : this.statusID,
      "lid" : this.leadID,
      "isAdmin" : this.isAdmin
    }
    this.auth.updateStatus(status).subscribe(() => {
      this.router.navigateByUrl('/leads');
    }, (err) => {
      console.error(err);
    });
  }

}
