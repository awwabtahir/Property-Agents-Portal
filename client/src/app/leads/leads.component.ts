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
export class LeadsComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  dtOptions: any = {};

  leadId;

  constructor(private auth: AuthenticationService, private router: Router,
    private leadService: LeadService) { }

  ngOnInit() {
    this.getInventories();
    //this.getLeads();
    this.getCities();
    this.getLocations();
    this.getSubLocations();
    this.getPropTypes();
    this.getStatusTypes();
    this.getUsers();

    this.dtOptions = {
      responsive: true,
      order: [[0, "desc"]]
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

  searchTable(value) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns(1).search(value).draw();
    });
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

      this.resultLeads = this.setLeads(this.leads);
      this.leadService.setLeads(this.leads);

    }, (err) => {
      console.error(err);
    });
  }

  isCityManager = false;
  setLeads(leads) {
    if (this.auth.isCityManager() == 'yes') {
      this.isCityManager = true;
      let invs = this.inventories;
      let loc = this.auth.getlocation();
      invs = invs.filter(function (inv) {
        return inv.cityId == loc;
      });

      this.inventories = invs;

      let newLeads = [];
      for (let i = 0; i < leads.length; i++) {
        for (let j = 0; j < invs.length; j++) {
          if (leads[i]._id == invs[j].leadId) {
            newLeads.push(leads[i]);
          }
        }
      }
      return newLeads;

    } else {
      return leads;
    }

  }

  inventories;

  getInventories() {
    this.auth.getInventories().subscribe(inventories => {
      this.inventories = inventories;
      this.getLeads();
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
    console.log("invalid -> " + id);
  }

  cities;
  selectedCity = 0;

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

  onCityChange() {

    let cityId = this.selectedCity;
    if (cityId == 0) {
      this.searchTable("");
    } else {
      let city = this.cities.filter(function (city) {
        return city._id == cityId;
      });
      let cityName = city[0].name;
      this.searchTable(cityName.toLowerCase());
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

  sublocations;

  getSubLocations() {
    this.auth.getSLocations().subscribe(sublocations => {
      this.sublocations = sublocations;
    }, (err) => {
      console.error(err);
    });
  }

  getSubLocation(id) {
    for (var j = 0; j < this.sublocations.length; j++) {
      if (this.sublocations[j]._id == this.getInventory(id).sublocationId) {
        return this.sublocations[j];
      }
    }
    return false;
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

  delModal(id) {
    this.leadId = id;
    console.log(this.leadId);
  }

  deleteLead() {

    let id = this.leadId;

    for (var i = 0; i < this.leads.length; i++) {
      if (this.leads[i]._id == id) {
        this.leads.splice(i, 1);
        break;
      }
    }

    let isAdmin;

    if (this.auth.isAdmin()) isAdmin = true;
    if (this.auth.isAgent()) isAdmin = false;

    let status: Status;

    if (isAdmin) {
      status = {
        "sid": 0,
        "lid": id,
        "isAdmin": isAdmin
      }
    } else {
      status = {
        "sid": 6,
        "lid": id,
        "isAdmin": isAdmin
      }
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
