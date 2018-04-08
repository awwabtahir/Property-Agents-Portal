import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthenticationService, Leads, Inventories, Status } from '../authentication.service';
import { LeadService } from '../lead.service';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit, AfterViewInit  {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  dtOptions: any = {};

  constructor(private auth: AuthenticationService, private router: Router,
    private leadService: LeadService) { }

  ngOnInit() {
    this.getInventories();
    this.getLeads();
    this.getCities();
    this.getLocations();
    this.getPropTypes();
    this.getStatusTypes();
    this.getUsers();

    this.dtOptions = {
      responsive: true,
      order: [[ 0, "desc" ]]
    };
  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function () {
          const that = this;
          $('#leadInput21', this.footer()).on('keyup change', function () {
            if (that.search() !== this['value']) {
              that
                .search(this['value'])
                .draw();
            }
          });
        });
        $('#datatableId tfoot tr').appendTo('#datatableId thead');
      });

    }, 3000);


  }


  // For getting leads

  rawleads;
  leads;
  resultLeads;

  getLeads() {
    this.auth.getLeads().subscribe(leads => {

      this.rawleads = leads.filter(function (leads) {
        return leads.assignedTo !== "0";
      });

      this.leads = this.rawleads.filter(function (rawleads) {
        return rawleads.leadAdminStatus !== 0;
      });

      if (this.auth.isAgent) {
        this.leads = this.leads.filter(function (leads) {
          return leads.leadAgentStatus !== 0;
        });
      }

      this.resultLeads = this.leads;

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

  statusTypes;

  getStatusTypes() {
    this.auth.getStatusTypes().subscribe(statusTypes => {
      this.statusTypes = statusTypes;
    }, (err) => {
      console.error(err);
    });
  }

  getStatusType(id) {
    for (var i = 0; i < this.statusTypes.length; i++) {
      if (this.statusTypes[i]._id == id) {
        return this.statusTypes[i].type;
      }
    }
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

  changeStatus(statusID, leadID) {
    this.leadService.setStatusID(statusID);
    this.leadService.setLeadID(leadID);
    this.router.navigateByUrl('/editstatus');
  }

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

  deleteLead(id) {

    for (var i = 0; i < this.leads.length; i++) {
      if (this.leads[i]._id == id) {
        this.leads.splice(i, 1);
        break;
      }
    }

    let isAdmin;

    if (this.auth.isAdmin) isAdmin = true;
    else isAdmin = false;

    console.log(isAdmin);

    let status: Status = {
      "sid": 0,
      "lid": id,
      "isAdmin": isAdmin
    }

    this.auth.updateStatus(status).subscribe(() => {
      console.log("success");
    }, (err) => {
      console.error(err);
    });

  }

  addLead() {
    this.leadService.setIsLead(true);
    this.router.navigateByUrl('/add');
  }

  ///////////////////////////////////////
  ///////// For search
  //////////////////////////////////////



}
