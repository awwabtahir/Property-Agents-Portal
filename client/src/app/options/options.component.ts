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
  
  cityAdded = false;
  addCity() {
    this.auth.addCity(this.city).subscribe(() => {
      this.getCities();
      this.router.navigateByUrl('/options');
    }, (err) => {
      console.error(err);
    });
    this.cityAdded = true;
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

  // Edit City
  selectedCity;
  selectedCityData;
  editCityClick = false;
  cityUpdated = false;

  editCityBtnClicked() {
    this.editCityClick = true;
    this.cityUpdated = false;
    var selectedCity = this.selectedCity;
    this.selectedCityData = this.cities.filter(function (city) {
      return city._id == selectedCity;
    });
    $("#cityName").val(this.selectedCityData[0].name);
  }

  editCity() {
    if (this.city.name !== "") this.selectedCityData[0].name = this.city.name;

    var city = {
      _id: 0,
      name: ""
    };
    city._id = this.selectedCityData[0]._id;
    city.name = this.selectedCityData[0].name;

    this.auth.updateCity(city).subscribe(() => {
      console.log("success");
    }, (err) => {
      console.error(err);
    });

    this.editCityClick = false;
    this.cityUpdated = true;
    $("#cityName").val("");

  }

  deleteCityBtn = false;
  deleteCityBtnPressed() {
    this.deleteCityBtn = true;
  }
  deleteCityBtnClicked() {
    console.log(this.selectedCity);
    let id = this.selectedCity;
    var city = {
      _id: id
    };

    this.auth.deleteCity(city).subscribe(() => {
      console.log("success");
    }, (err) => {
      console.error(err);
    });

    for (var i = 0; i < this.cities.length; i++) {
      if (this.cities[i]._id == id) {
        this.cities.splice(i, 1);
        break;
      }
    }
    this.deleteCityBtn = false;
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
  
  locAdded = false;
  addLoc() {
    this.auth.addLoc(this.location).subscribe(() => {
      this.getLocations();
      this.getSubLocations()
      this.router.navigateByUrl('/options');
    }, (err) => {
      console.error(err);
    });
    this.locAdded = true;
    setTimeout(function() {
      this.locAdded = false;
    }, 3000);
  }

  // For getting locations

  locations;

  getLocations() {
    let curCity = this.selectedLocCity;
    this.auth.getLocations().subscribe(locations => {
      this.locations = locations;
      if(curCity !== undefined)
        this.onChange(curCity);
      else
        this.onChange(this.auth.getlocation());
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

  // for editing location
  selectedLocCity;
  selectedLoc;
  selectedLocData;
  selectedSubLoc;
  selectedSubLocData;
  locationUpdated;

  editLocClicked = false;
  locUpdated = false;

  editLocBtnClicked() {
    this.editLocClicked = true;
    this.locUpdated = false;

    let selectedLoc = this.selectedLoc;
    let selectedSubLoc = this.selectedSubLoc;

    this.location.cityId = this.selectedLocCity;
    this.selectedLocData = this.locations.filter(function (loc) {
      return loc._id == selectedLoc;
    });

    $("#inputLocation").val(this.selectedLocData[0].location);

    if (selectedSubLoc) {
      this.selectedSubLocData = this.sublocations.filter(function (loc) {
        return loc._id == selectedSubLoc;
      });
      $("#inputSubLocation").val(this.selectedSubLocData[0].sublocation);
    }

  }

  editLoc() {

    // location to update
    var location = {
      cityId: this.selectedLocCity,
      locationId: this.selectedLoc,
      location: $("#inputLocation").val(),
      sublocationId: 0,
      sublocation: $("#inputSubLocation").val()
    }

    if (this.selectedSubLoc) {
      location.sublocationId = this.selectedSubLoc;
    }

    console.log(location);

    this.auth.updateLocation(location).subscribe(() => {
      console.log("success");
      this.getLocations();
      this.getSubLocations();
    }, (err) => {
      console.error(err);
    });

    this.editLocClicked = false;
    this.locUpdated = true;
    $("#inputLocation").val("");
    $("#inputSubLocation").val("");
  }

  // delete location
  locDelBtn = false;
  locDelBtnPressed() {
    this.locDelBtn = true;
  }

  locDelBtnClicked() {

    var location = {
      locationId: this.selectedLoc,
      sublocationId: 0
    };

    if (this.selectedSubLoc) {
      location.sublocationId = this.selectedSubLoc;
      for (var i = 0; i < this.sublocations.length; i++) {
        if (this.sublocations[i]._id == this.selectedSubLoc) {
          this.sublocations.splice(i, 1);
          break;
        }
      }
    } else {
      for (var i = 0; i < this.locations.length; i++) {
        if (this.locations[i]._id == this.selectedLoc) {
          this.locations.splice(i, 1);
          break;
        }
      }
      for (var i = 0; i < this.sublocations.length; i++) {
        if (this.sublocations[i].locationId == this.selectedLoc) {
          this.sublocations.splice(i, 1);
        }
      }
    }
    this.auth.deleteLocation(location).subscribe(() => {
      console.log("success");
      this.getLocations();
    }, (err) => {
      console.error(err);
    });

    this.locDelBtn = false;
  }


  ///////////////////////////////////////////////

  /***************
   For property type operations
  *****************/

  // Adding property type

  propType: PropertyType = {
    type: ""
  };
  
  propTypeAdded = false;
  addPropType() {
    this.auth.addPropType(this.propType).subscribe(() => {
      this.getPropTypes();
      this.router.navigateByUrl('/options');
    }, (err) => {
      console.error(err);
    });
    this.propTypeAdded = true;
    setTimeout(function() {
      this.propTypeAdded = false;
    }, 3000);
  }

  // Getting property types

  propTypes;

  getPropTypes() {
    this.auth.getPropTypes().subscribe(propTypes => {
      this.propTypes = propTypes;
    }, (err) => {
      console.error(err);
    });
  }

  // Editing property types
  selectedPropType;
  selectedPropTypeData;

  editProp = false;

  editPropTypeClicked() {
    this.editProp = true;
    let propTypeId = this.selectedPropType;

    this.selectedPropTypeData = this.propTypes.filter(function (prop) {
      return prop._id == propTypeId;
    });

    $("#inputType").val(this.selectedPropTypeData[0].type);
  }

  editPropType() {
    let type = {
      typeId: this.selectedPropType,
      type: $("#inputType").val()
    }

    console.log(type);

    this.auth.updatePropType(type).subscribe(() => {
      console.log("success");
      this.getPropTypes();
    }, (err) => {
      console.error(err);
    });

    this.editProp = false;
    $("#inputType").val("");
  }

  // deleting property type

  deletePropBtn = false;

  deletePropBtnClicked() {
    this.deletePropBtn = true;
  }

  deletePropType() {
    let propType = {
      _id : this.selectedPropType
    }
    this.auth.deletePropType(propType).subscribe(() => {
      console.log("success");
      this.getPropTypes();
    }, (err) => {
      console.error(err);
    });
    this.deletePropBtn = false;
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
  
  statusTypeAdded = false;
  addStatusType() {
    this.auth.addStatusType(this.statusType).subscribe(() => {
      this.getStatusTypes();
      this.router.navigateByUrl('/options');
    }, (err) => {
      console.error(err);
    });
    this.statusTypeAdded = true;
    setTimeout(function() {
      this.statusTypeAdded = false;
    }, 3000);
  }

  // Getting status types

  statusTypes;

  getStatusTypes() {
    this.auth.getStatusTypes().subscribe(statusTypes => {
      this.statusTypes = statusTypes;
      this.statusTypes = this.statusTypes.filter(function (status) {
        return status._id !== 0;
      });
      this.statusTypes = this.statusTypes.filter(function (status) {
        return status._id !== 1;
      });
      this.statusTypes = this.statusTypes.filter(function (status) {
        return status._id !== 2;
      });
      this.statusTypes = this.statusTypes.filter(function (status) {
        return status._id !== 6;
      });
    }, (err) => {
      console.error(err);
    });
  }

  // Edit status type
  selectedStatusType;
  selectedStatusTypeData;
  editStatusBtn = false;

  editStatusClicked() {
    this.editStatusBtn = true;
    let statusTypeId = this.selectedStatusType;
    
    this.selectedStatusTypeData = this.statusTypes.filter(function (status) {
      return status._id == statusTypeId;
    });

    $("#inputStatusType").val(this.selectedStatusTypeData[0].type);

  }

  editStatusType() {
    let statusType = {
      _id : this.selectedStatusType,
      type: $("#inputStatusType").val()
    }

    this.auth.updateStatusType(statusType).subscribe(() => {
      console.log("success");
      this.getStatusTypes();
    }, (err) => {
      console.error(err);
    });

    this.editStatusBtn = false;
    $("#inputStatusType").val("");
  }

  // delete status type
  deleteStatusBtn = false;

  deleteStatusBtnClicked() {
    this.deleteStatusBtn = true;
  }

  deleteStatusType() {
    let statusType = {
      _id: this.selectedStatusType
    }
    this.auth.deleteStatusType(statusType).subscribe(() => {
      console.log("success");
      this.getStatusTypes();
    }, (err) => {
      console.error(err);
    });
    this.deleteStatusBtn = false;
  }

  /////////////////////////////////////////////////////////

  constructor(private auth: AuthenticationService, private router: Router) { }
  
  isCityManager = false;
  ngOnInit() {
    this.getCities();
    this.getLocations();
    this.getSubLocations();
    this.getPropTypes();
    this.getStatusTypes();

    
    if(this.auth.isCityManager() == 'yes') {
      this.isCityManager = true;
      this.location.cityId = parseInt(this.auth.getlocation());
      this.selectedLocCity = this.auth.getlocation();
    }
  }

}
