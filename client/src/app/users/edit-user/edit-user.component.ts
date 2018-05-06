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

  isCityManager = false;
  ngOnInit() {
    this.getUser();
    this.getCities();
    this.getLocations();

    if(this.auth.isCityManager() == 'yes') {
      this.isCityManager = true;
    }
  }

  credentials;

  getUser() {
    this.credentials = this.leadService.getUser();
    this.onAdminChange();
  }

  updateUser() {
    console.log(this.credentials);
    this.auth.updateUser(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/users');
    }, (err) => {
      console.error(err);
    });
  }

  cities;
  getCities() {
    this.auth.getCities().subscribe(cities => {
      this.cities = cities;
    }, (err) => {
      console.error(err);
    });
  }

  // City onChange()
  newLocations;
  onChange(id) {
    this.newLocations = this.locations.filter(function (locations) {
      return locations.cityId == id;
    });
  }

  locations;

  getLocations() {
    this.auth.getLocations().subscribe(locations => {
      this.locations = locations;
      this.onChange(this.credentials.city);
    }, (err) => {
      console.error(err);
    });
  }

  agentSelected = true;
  onAdminChange() {
    if(this.credentials.access == 1) this.agentSelected = false;
    if(this.credentials.access == 2) this.agentSelected = true;
  }

}
