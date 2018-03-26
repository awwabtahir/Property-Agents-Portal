import { LeadService } from './../../lead.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService, Cities, Locations, PropertyTypes, Lead } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent implements OnInit {

  isLead;

  getIsLead() {
    this.isLead = this.LeadService.getIsLead();
  }

  // For city

  // Get cities

  cities: Cities;

  getCities() {
    this.auth.getCities().subscribe(cities => {
      this.cities = cities;
    }, (err) => {
      console.error(err);
    });
  }

  //////////////////////////////////////////////////////////

  // For Location

  // Get Locations

  locations: Locations;

  getLocations() {
    this.auth.getLocations().subscribe(locations => {
      this.locations = locations;
    }, (err) => {
      console.error(err);
    });
  }

  /////////////////////////////////////////////////////////

  // Property Type

  // Get Property Types

  propTypes;

  getPropTypes() {
    this.auth.getPropTypes().subscribe(propTypes => {
      this.propTypes = propTypes;
    }, (err) => {
      console.error(err);
    });
  }

  get getPropertyType() {
    for (var j = 0; j < this.propTypes.length; j++) {
      if (this.propTypes[j]._id == this.lead.propTypeId) {
        return this.propTypes[j].type;
      }
    }
  }

  //////////////////////////////////////////////////////////

  // For Users

  // Get Users

  users;

  getUsers() {
    this.auth.getUsers().subscribe(unfiltered_users => {

      this.users = unfiltered_users.filter(function (unfiltered_user) {
        return unfiltered_user.access !== 3;
      });

    }, (err) => {
      console.error(err);
    });
  }

  /////////////////////////////////////////////////////////

  // For Lead

  // Add Lead

  lead: Lead = {
    purpose: 1,
    cityId: 0,
    locationId: 0,
    propTypeId: 0,
    propNumber: "",
    street: "",
    demand: 0,
    area: "",
    areaUnit: 1,
    beds: 0,
    clientName: "",
    clientType: 0,
    phoneNumber: "",
    assignedTo: 0,
    leadStatus: "Active"
  };

  addLead() {
    this.auth.addLead(this.lead).subscribe(() => {
      if(this.isLead)
        this.router.navigateByUrl('/leads');
      else
      this.router.navigateByUrl('/inventory');
    }, (err) => {
      console.error(err);
    });
  }

  constructor(private auth: AuthenticationService, private router: Router, 
  private LeadService: LeadService) { }

  ngOnInit() {
    this.getCities();
    this.getLocations();
    this.getPropTypes();
    this.getUsers();
    this.getIsLead();
  }

}
