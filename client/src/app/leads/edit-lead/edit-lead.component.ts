import { Component, OnInit } from '@angular/core';
import { AuthenticationService, Cities, Locations, PropertyTypes } from '../../authentication.service';
import { LeadService } from '../../lead.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-lead',
  templateUrl: './edit-lead.component.html',
  styleUrls: ['./edit-lead.component.css']
})
export class EditLeadComponent implements OnInit {

  isLead;

  getIsLead() {
    this.isLead = this.leadService.getIsLead();
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

  // City onChange()
  newLocations;
  onChange(id) {
    this.newLocations = this.locations.filter(function (locations) {
      return locations.cityId == id;
    });
  }

  //////////////////////////////////////////////////////////

  // For Location

  // Get Locations

  locations;

  getLocations() {
    this.auth.getLocations().subscribe(locations => {
      this.locations = locations;
      this.newLocations = locations;
    }, (err) => {
      console.error(err);
    });
  }

  // Location onLocChange()
  newSubLocations;
  onLocChange(id) {
    this.newSubLocations = this.sublocations.filter(function (sublocations) {
      return sublocations.locationId == id;
    });
  }


  sublocations;

  getSubLocations() {
    this.auth.getSubLocations().subscribe(sublocations => {
      this.sublocations = sublocations;
      this.newSubLocations = sublocations;
    }, (err) => {
      console.error(err);
    });
  }

  /////////////////////////////////////////////////////////

  // Property Type

  // Get Property Types

  propTypes: PropertyTypes;

  getPropTypes() {
    this.auth.getPropTypes().subscribe(propTypes => {
      this.propTypes = propTypes;
    }, (err) => {
      console.error(err);
    });
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

  lead;

  getLead() {
    this.lead = this.leadService.getInventory();
    this.lead = Object.assign({}, this.lead, this.leadService.getLead());
    console.log(this.lead);
  }

  updateLead() {
    if (this.lead.assignedTo == 0) {
      var userId = this.leadService.getUserId();
      this.lead.assignedTo = userId;
    }

    this.auth.updateLead(this.lead).subscribe(() => {
      if (this.isLead)
        this.router.navigateByUrl('/leads');
      else
        this.router.navigateByUrl('/inventory');
    }, (err) => {
      console.error(err);
    });
  }

  constructor(private auth: AuthenticationService, private router: Router,
    private leadService: LeadService) { }

  ngOnInit() {
    this.getCities();
    this.getLocations();
    this.getSubLocations();
    this.getPropTypes();
    this.getLead();
    this.getUsers();
    this.getIsLead();
  }

}
