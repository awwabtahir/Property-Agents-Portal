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
        });
      });

    }, 3000);


  }

  users;

  getUsers() {
    this.auth.getUsers().subscribe(users => {
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

}
