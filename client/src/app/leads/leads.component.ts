import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService, Leads, Inventories } from '../authentication.service';
import { LeadService } from '../lead.service';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  dtOptions: any = {};

  constructor(private auth: AuthenticationService, private router: Router,
    private leadService: LeadService) { }

  ngOnInit() {
    this.getInventories();
    this.getLeads();
    this.getCities();
    this.getLocations();
    this.getPropTypes();
    this.getUsers();

    this.dtOptions = {
      responsive: true
    };
  }


  // For getting leads

  leads;

  getLeads() {
    this.auth.getLeads().subscribe(leads => {

      this.leads = leads.filter(function (leads) {
        return leads.assignedTo !== "0";
      });

      this.leadService.setLeads(this.leads);

    }, (err) => {
      console.error(err);
    });
  }

  inventories;

  getInventories() {
    this.auth.getInventories().subscribe(inventories => {
      this.inventories = inventories;
      this.leadService.setInventories(this.inventories);
    }, (err) => {
      console.error(err);
    });
  }

  getInventory(id) {
    for (var i = 0; i < this.inventories.length; i++) {
      if (this.inventories[i].leadId == id) {
        return this.inventories[i];
      }
    }
  }

  cities;

  getCities() {
    this.auth.getCities().subscribe(cities => {
      this.cities = cities;
      this.leadService.setCities(this.cities);
    }, (err) => {
      console.error(err);
    });
  }

  getCity(id) {
    for (var j = 0; j < this.cities.length; j++) {
      if (this.cities[j]._id == this.getInventory(id).cityId) {
        return this.cities[j];
      }
    }
  }

  propertytypes;

  getPropTypes() {
    this.auth.getPropTypes().subscribe(propertytypes => {
      this.propertytypes = propertytypes;
      this.leadService.setPropertyTypes(this.propertytypes);
    }, (err) => {
      console.error(err);
    });
  }

  getPropertyType(id) {
    for (var j = 0; j < this.propertytypes.length; j++) {
      if (this.propertytypes[j]._id == this.getInventory(id).propTypeId) {
        return this.propertytypes[j];
      }
    }
  }

  locations;

  getLocations() {
    this.auth.getLocations().subscribe(locations => {
      this.locations = locations;
      this.leadService.setLocations(this.locations);
    }, (err) => {
      console.error(err);
    });
  }

  getLocation(id) {
    for (var j = 0; j < this.locations.length; j++) {
      if (this.locations[j]._id == this.getInventory(id).locationId) {
        return this.locations[j];
      }
    }
  }

  users;

  getUsers() {
    this.auth.getUsers().subscribe(users => {
      this.users = users;
    }, (err) => {
      console.error(err);
    });
  }

  getUser(id) {
    for (var j = 0; j < this.users.length; j++) {
      if (this.users[j]._id == id) {
        return this.users[j];
      }
    }
  }

  public static areaUnits = {
    ONE: "Sq. Feet",
    TWO: "Marla",
    THREE: "Kanal"
  };

  public static clientTypes = {
    ONE: "Owner",
    TWO: "Dealer"
  };

  editLead(id) {

    for (var i = 0; i < this.leads.length; i++) {
      if (this.leads[i]._id == id) {
        this.leadService.setLead(this.leads[i]);
        break;
      }
    }

    for (var i = 0; i < this.inventories.length; i++) {
      if (this.inventories[i].leadId == id) {
        this.leadService.setInventory(this.inventories[i]);
        break;
      }
    }

    if (this.leadService.getLead && this.leadService.getInventory) {
      this.leadService.setIsLead(true);
      this.router.navigateByUrl('/editlead');
    }

  }

  addLead() {
    this.leadService.setIsLead(true);
    this.router.navigateByUrl('/add');
  }

}
