import { LeadService } from './../../lead.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService, Cities, Locations, PropertyTypes, Lead, StatusTypes } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router,
    private LeadService: LeadService) { }

  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.LeadService.setUserId(user._id);
    }, (err) => {
      console.error(err);
    });

    this.getCities();
    this.getLocations();
    this.getSubLocations();
    this.getPropTypes();
    this.getUsers();
    this.getIsLead();
    this.getStatusTypes();

  }


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

  // City onChange()
  newLocations: Locations;
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
    }, (err) => {
      console.error(err);
    });
  }

  // Location onLocChange()
  newSubLocations;
  isLocation = false;
  onLocChange(id) {
    this.isLocation = true;
    this.newSubLocations = this.sublocations.filter(function (sublocations) {
      return sublocations.locationId == id;
    });
  }

  sublocations;

  getSubLocations() {
    this.auth.getSLocations().subscribe(sublocations => {
      this.sublocations = sublocations;
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

  // Status Type

  // Get Status Types

  statusTypes;

  getStatusTypes() {
    this.auth.getStatusTypes().subscribe(statusTypes => {
      this.statusTypes = statusTypes;
      this.setStatusType();
    }, (err) => {
      console.error(err);
    });
  }

  setStatusType() {
    for (var j = 0; j < this.statusTypes.length; j++) {
      if (this.statusTypes[j].type == "Added") {
        this.lead.leadAdminStatus = this.statusTypes[j]._id;
        console.log(this.lead.leadAdminStatus);
      }
      if (this.statusTypes[j].type == "Assigned") {
        this.lead.leadAgentStatus = this.statusTypes[j]._id;
        console.log(this.lead.leadAgentStatus);
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
    purpose: 0,
    cityId: 0,
    locationId: 0,
    sublocationId: 0,
    propTypeId: 0,
    propNumber: null,
    street: null,
    demand: null,
    area: null,
    areaUnit: 1,
    beds: 0,
    clientName: null,
    clientType: 0,
    phoneNumber: null,
    assignedTo: 0,
    leadAdminStatus: 0,
    leadAgentStatus: 0,
    cmt: null
  };

  required = false;
  addLead() {
    if(this.lead.assignedTo == 0) {
      var userId = this.LeadService.getUserId();
      this.lead.assignedTo = userId;
    }

    let l = this.lead;

    if(
      (l.cityId == 0) && (l.locationId == 0) && (l.propTypeId == 0) && (!l.propNumber) &&
      (!l.demand) && (!l.area) && (!l.clientName) && (l.clientType == 0) && (!l.phoneNumber) &&
      (l.purpose == 0)
     ) {
      this.required = true;
     } else {
      this.auth.addLead(this.lead).subscribe(() => {
        if (this.isLead)
          this.router.navigateByUrl('/leads');
        else
          this.router.navigateByUrl('/inventory');
      }, (err) => {
        console.error(err);
      });
     }    
  }


}
