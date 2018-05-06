import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent  implements OnInit {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: '',
    phone: '',
    location: '',
    city: '',
    access: 2,
    cityManager: 0,
    status: 1
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  isCityManager = false;
  ngOnInit() {

    this.getCities();
    this.getLocations();

    if(this.auth.isCityManager() == 'yes') {
      this.isCityManager = true;
      this.credentials.city = this.auth.getlocation();
    }
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/users');
    }, (err) => {
      console.error(err);
    });
    console.log(this.credentials);
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
  onAgentChange() {
    if(this.credentials.access == 2)
      this.agentSelected = true;
  }
  onAdminChange() {
    if(this.credentials.access == 1)
      this.agentSelected = false;
  }

}
