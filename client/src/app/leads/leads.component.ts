import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthenticationService, Leads, Inventories, Status } from '../authentication.service';
import { LeadService } from '../lead.service';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions = { order: [[0, "desc"]], responsive: true, autoWidth: false, iDisplayLength: 50 };
  dtTrigger: Subject<any> = new Subject();

  leadId;
  isAgent = false;
  isCityManager = false;

  public static areaUnits = {
    ONE: "Sq. Feet",
    TWO: "Marla",
    THREE: "Kanal"
  };
  public static clientTypes = {
    ONE: "Owner",
    TWO: "Dealer"
  };

  constructor(
    public auth: AuthenticationService, 
    private router: Router,
    private leadService: LeadService) {      
  }

  ngOnInit() {
    this.isAgent = this.auth.isAgent();
    this.getInventories();
    this.getLeads();
    this.getCities();
    this.getLocations();
    this.getSubLocations();
    this.getPropTypes();
    this.getStatusTypes();
    this.getUsers();
  }

  ngAfterViewInit(): void {
      this.drawTable();
  }

  // For table  

  searchTable(value, col) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns(col).search(value).draw();
    });
  }

  private drawTable() {
    this.dtTrigger.next();
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('#leadInput21', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) 
            that.search(this['value']).draw();
        });
      });
      $('#datatableId tfoot tr').appendTo('#datatableId thead');
    });
  }

  private redrawTable(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.drawTable();
    });
  }

  // For leads

  leads = [];
  resultLeads = [];
  loading = true;
  getLeads() {
    this.auth.getLeads().subscribe(leads => {
      this.applyLeadsFilter(leads);
      this.resultLeads = this.setLeads(this.leads);
      this.redrawTable();
      this.leadService.setLeads(this.leads);
      this.loading = false;
    });
  }

  private applyLeadsFilter(leads) {
    let rawleads = leads.filter(function (leads) { return leads.assignedTo !== "0"; });
    this.leads = rawleads.filter(function (leads) { return leads.leadAdminStatus !== 0; });
    if (this.auth.isAgent) 
      this.leads = this.leads.filter(function (leads) { return leads.leadAgentStatus !== 0; });
  }

  private setLeads(leads) {
    if (this.auth.isCityManager() !== 'yes') return leads;

      this.isCityManager = true;

      let loc = this.auth.getlocation();
      this.inventories = this.inventories.filter(function (inv) { return inv.cityId == loc; });

      let newLeads = [];
      for (let i = 0; i < leads.length; i++) 
        for (let j = 0; j < this.inventories.length; j++) 
          if (leads[i]._id == this.inventories[j].leadId) newLeads.push(leads[i]);
      return newLeads;
  }

  // For Inventories

  inventories = [];
  getInventories() {
    this.auth.getInventories().subscribe(inventories => {
      this.inventories = inventories;
      this.leadService.setInventories(this.inventories);
    });
  }

  getInventory(id) {
    for (var i = 0; i < this.inventories.length; i++) {
      if (this.inventories[i].leadId == id) {
        return this.inventories[i];
      }
    }
    return false;
  }

  // For cities

  cities = [];
  selectedCity = 0;
  getCities() {
    this.auth.getCities().subscribe(cities => {
      this.cities = cities;
      this.leadService.setCities(this.cities);
    });
  }

  getCity(id) {
    for (var j = 0; j < this.cities.length; j++) {
      if (this.cities[j]._id == this.getInventory(id).cityId) {
        return this.cities[j];
      }
    }
    return false;
  }

  onCityChange() {
    let cityId = this.selectedCity;
    if (cityId == 0) this.searchTable("", 1);
    else {
      let city = this.cities.filter(function (city) { return city._id == cityId; });
      let cityName = city[0].name;
      this.searchTable(cityName.toLowerCase(), 1);
    }
  }

  // For property types

  propertytypes = [];
  getPropTypes() {
    this.auth.getPropTypes().subscribe(propertytypes => {
      this.propertytypes = propertytypes;
      this.leadService.setPropertyTypes(this.propertytypes);
    });
  }

  getPropertyType(id) {
    for (var j = 0; j < this.propertytypes.length; j++)
      if (this.propertytypes[j]._id == this.getInventory(id).propTypeId) 
        return this.propertytypes[j];
    
    return false;
  }

  // For status types

  statusTypes = [];
  getStatusTypes() {
    this.auth.getStatusTypes().subscribe(statusTypes => {
      this.statusTypes = statusTypes;
    });
  }

  getStatusType(id) {
    for (var i = 0; i < this.statusTypes.length; i++) {
      if (this.statusTypes[i]._id == id) {
        return this.statusTypes[i].type;
      }
    }
    return false;
  }

  // For locations

  locations = [];
  getLocations() {
    this.auth.getLocations().subscribe(locations => {
      this.locations = locations;
      this.leadService.setLocations(this.locations);
    });
  }

  getLocation(id) {
    for (var j = 0; j < this.locations.length; j++) 
      if (this.locations[j]._id == this.getInventory(id).locationId) 
        return this.locations[j];
      
    return false;
  }

  sublocations = [];
  getSubLocations() {
    this.auth.getSLocations().subscribe(sublocations => {
      this.sublocations = sublocations;
    });
  }

  getSubLocation(id) {
    for (var j = 0; j < this.sublocations.length; j++) 
      if (this.sublocations[j]._id == this.getInventory(id).sublocationId) 
        return this.sublocations[j];

    return false;
  }

  // For users
  users = [];
  selectedAgent = 0;
  getUsers() {
    this.auth.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getUser(id) {
    for (var j = 0; j < this.users.length; j++)
      if (this.users[j]._id == id) 
        return this.users[j];
      
    return false;
  }

  onAgentChange() {
    let agentId = this.selectedAgent;
    if (agentId == 0) this.searchTable("", 4);
    else {
      let agent = this.users.filter(function (user) { return user._id == agentId; });
      let agentName = agent[0].name;
      this.searchTable(agentName.toLowerCase(), 4);
    }
  }

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
    });

  }

  addLead() {
    this.leadService.setIsLead(true);
    this.router.navigateByUrl('/add');
  }

}
