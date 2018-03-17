import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../../authentication.service';
import { LeadService } from '../../lead.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  details: UserDetails;

  constructor(private auth: AuthenticationService,
    private leadService: LeadService) { }

  ngOnInit() {

    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });

    this.getInventories();
    this.getLeads();
    this.getCities();
    this.getLocations();
    this.getPropTypes();
    
  }

  leads;

  getLeads() {
    this.auth.getLeads().subscribe(leads => {
      this.leads = leads;
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

  cities;

  getCities() {
    this.auth.getCities().subscribe(cities => {
      this.cities = cities;
      this.leadService.setCities(this.cities);
    }, (err) => {
      console.error(err);
    });
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

  locations;

  getLocations() {
    this.auth.getLocations().subscribe(locations => {
      this.locations = locations;
      this.leadService.setLocations(this.locations);
    }, (err) => {
      console.error(err);
    });
  }


}
