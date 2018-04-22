import { Component, OnInit } from '@angular/core';
import { AuthenticationService, City, Cities, Location, PropertyType, Locations, PropertyTypes, StatusType, StatusTypes } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html'
})
export class OptionsComponent implements OnInit {

  /***************
   For city operations
  *****************/

  // For adding city

  city: City = {
    name: ''
  };

  addCity() {
    this.auth.addCity(this.city).subscribe(() => {
      this.getCities();
      this.router.navigateByUrl('/options');
    }, (err) => {
      console.error(err);
    });
  }

  // For getting cities

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


  ///////////////////////////////////////////////

  /***************
   For location operations
  *****************/

  // For adding location & sub-locations

  location: Location = {
    cityId: 0,
    location: '',
    sublocation: ''
  };

  addLoc() {
    this.auth.addLoc(this.location).subscribe(() => {
      this.getLocations();
      this.getSubLocations()
      this.router.navigateByUrl('/options');
    }, (err) => {
      console.error(err);
    });
  }

  // For getting locations

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
  onLocChange(id) {
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

  ///////////////////////////////////////////////

  /***************
   For property type operations
  *****************/

  // Adding property type

  propType: PropertyType = {
    type: ""
  };

  addPropType() {
    this.auth.addPropType(this.propType).subscribe(() => {
      this.getPropTypes();
      this.router.navigateByUrl('/options');
    }, (err) => {
      console.error(err);
    });
  }

  // Getting property types

  propTypes: PropertyTypes;
  
  getPropTypes() {
    this.auth.getPropTypes().subscribe(propTypes => {
      this.propTypes = propTypes;
    }, (err) => {
      console.error(err);
    });
  }

  /////////////////////////////////////////////////////////

  ///////////////////////////////////////////////

  /***************
   For status type operations
  *****************/

  // Adding status type

  statusType: StatusType = {
    type: ""
  };

  addStatusType() {
    this.auth.addStatusType(this.statusType).subscribe(() => {
      this.getStatusTypes();
      this.router.navigateByUrl('/options');
    }, (err) => {
      console.error(err);
    });
  }

  // Getting status types

  statusTypes: StatusTypes;
  
  getStatusTypes() {
    this.auth.getStatusTypes().subscribe(statusTypes => {
      this.statusTypes = statusTypes;
    }, (err) => {
      console.error(err);
    });
  }

  /////////////////////////////////////////////////////////
  
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {    
    this.getCities();
    this.getLocations();
    this.getSubLocations();
    this.getPropTypes();
    this.getStatusTypes();
  } 

}
