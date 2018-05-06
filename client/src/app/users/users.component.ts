import { DataTableDirective } from 'angular-datatables';
import { LeadService } from './../lead.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  dtOptions: any = {};

  constructor(private auth: AuthenticationService, private router: Router,
  private leadService: LeadService) { }

  ngOnInit() {
    this.getUsers();
    this.getLocations();
    this.getCities();

    this.dtOptions = {
      responsive: true
    };
  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function () {
          const that = this;
          $('#userInput21', this.footer()).on('keyup change', function () {
            if (that.search() !== this['value']) {
              that
                .search(this['value'])
                .draw();
            }
          });
          $('#datatableId tfoot tr').appendTo('#datatableId thead');
        });
      });

    }, 3000);


  }

  users;

  getUsers() {
    let loc = "0";
    if(this.auth.isCityManager() == 'yes') {
      loc = this.auth.getlocation();
    }
    this.auth.getUsers().subscribe(users => {
      if(loc !== "0") {
        users = users.filter(function (user) {
          return user.city == loc;
        });
      }
      this.users = users;
    }, (err) => {
      console.error(err);
    });
  }

  editUser(id) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i]._id == id) {
        this.leadService.setUser(this.users[i]);
        break;
      }
    }

    if(this.leadService.getUser) {
      this.router.navigateByUrl("/edituser");
    }

  }

  selectedUser;
  delModel(userId) {
    this.selectedUser = userId;
  }

  deleteUser() {
    let user = {
      _id : this.selectedUser
    }
    this.auth.deleteUser(user).subscribe(() => {
      console.log("success");
      this.getUsers();
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

  locations;
  getLocations() {
    this.auth.getLocations().subscribe(locations => {
      this.locations = locations;
    }, (err) => {
      console.error(err);
    });
  }

  getCity(id) {
    let city = this.cities.filter(function (city) {
      return city._id == id;
    });
    return city;
  }

  getLocation(id) {
    let location = this.locations.filter(function (location) {
      return location._id == id;
    });
    return location;
  }

}
