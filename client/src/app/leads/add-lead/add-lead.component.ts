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

  cities;

  getCities() {
    this.auth.getCities().subscribe(cities => {
      this.cities = cities;
    }, (err) => {
      console.error(err);
    });
  }

  // City onChange()
  newLocations: Locations;
  onChange(city) {
    this.newLocations = this.locations.filter(function (locations) {
      return locations.cityId == city._id;
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
  onLocChange(location) {
    this.isLocation = true;
    this.newSubLocations = this.sublocations.filter(function (sublocations) {
      return sublocations.locationId == location._id;
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
    purpose: 1,
    cityId: null,
    locationId: null,
    sublocationId: 0,
    propTypeId: null,
    propNumber: null,
    street: null,
    demand: null,
    area: null,
    areaUnit: 1,
    beds: 0,
    clientName: null,
    clientType: 1,
    phoneNumber: null,
    assignedTo: 0,
    leadAdminStatus: 0,
    leadAgentStatus: 0,
    cmt: null
  };

  addLead() {
    if ((this.lead.assignedTo == 0) && this.isLead) {
      var userId = this.LeadService.getUserId();
      this.lead.assignedTo = userId;
    }

    if ((this.lead.assignedTo !== 0) && this.isLead) {
      this.sendMessage();
    }

    this.auth.addLead(this.lead).subscribe(() => {
      if (this.isLead)
        this.router.navigateByUrl('/leads');
      else
        this.router.navigateByUrl('/inventory');
    }, (err) => {
      console.error(err);
    });

  }

  // For sending message
  sendMessage() {
    var lead = this.lead;
    var user = this.users.filter(function (user) {
      return user._id == lead.assignedTo;
    });
    var phone = user[0].phone;
    phone = phone.replace("0", "92");
    let msg = {
      "to": phone,
      "msg": this.contructMsg(lead)
    }
    console.log(msg);
    this.auth.sendMessage(msg).subscribe(() => {
      console.log("success");
    }, (err) => {
      console.error(err);
    });

  }

  // Construct Msg
  contructMsg(l: Lead) {
    // Client name
    let clientName = l.clientName;

    // Purpose
    let purpose = "";
    if (l.purpose == 1) purpose = "sell";
    if (l.purpose == 2) purpose = "buy";
    if (l.purpose == 3) purpose = "rent";

    // Property Type
    let type = this.propTypes.filter(function (type) {
      return type._id == l.propTypeId;
    });
    type = type[0].type;

    // Sub-Location
    let subLocation = this.sublocations.filter(function (sloc) {
      return sloc._id == l.sublocationId;
    });
    subLocation = subLocation[0].sublocation;

    // Location
    let location = this.locations.filter(function (loc) {
      return loc._id == l.locationId;
    });
    location = location[0].location;

    // City
    let city = this.cities.filter(function (city) {
      return city._id == l.cityId;
    });
    city = city[0].name;

    // Area
    let area = "";
    if (l.areaUnit == 1) area = l.area + " Sq. Feet";
    if (l.areaUnit == 2) area = l.area + " Marla";
    if (l.areaUnit == 3) area = l.area + " Kanal";

    // Demand
    let demand = l.demand;

    // Property Number
    let propNo = l.propNumber;

    // Street
    let street = l.street;

    // Comment
    let cmt = l.cmt;

    // phone
    let phone = l.phoneNumber;

    let msg = "You have assigned a new lead.\n" + clientName + " want to " + purpose + " the " + type
      + " in " + subLocation + ", " + location + ", " + city + ".\n" + "Area: " + area +
      " Demand: Rs. " + demand + " " + type + " #: " + propNo + " Street: " + street +
      " Phone #:" + phone + " Comment: " + cmt;

    return msg;

  }


}
