import { Status, Locations, Inventories } from './../authentication.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LeadService } from '../lead.service';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  minD: number;
  maxD: number;

  minA: number;
  maxA: number;

  inventoryId;

  dtOptions: any = {
  };

  dtTrigger: Subject<any> = new Subject();

  constructor(public auth: AuthenticationService, private router: Router,
    private leadService: LeadService) { }

  ngOnInit() {
    this.getLeads();
    // this.getUsers();
    // this.getPropTypes();
    // this.getLocations();
    // this.getCities();
    // this.getInventories();

    // We need to call the $.fn.dataTable like this because DataTables typings do not have the "ext" property
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      const demand = parseFloat(data[4]); // use data for the demand column
      const area = parseFloat(data[2].split(" ")[0]); // use data for the area column

      if ((!(this.minA) && area <= this.maxA) ||
        (this.minA <= area && !(this.maxA)) ||
        (this.minA <= area && area <= this.maxA)) {
        return true;
      }


      if ((!(this.minD) && demand <= this.maxD) ||
        (this.minD <= demand && !(this.maxD)) ||
        (this.minD <= demand && demand <= this.maxD)) {
        return true;
      }

      if ((!(this.minA) && !(this.maxA)) &&
        (!(this.minD) && !(this.maxD))) {
        //console.log("true");
        return true;
      }

      return false;
    });

    this.dtOptions = {
      order: [[0, "desc"]],
      iDisplayLength: 50,
      dom: 'lBfrtip',
      buttons: [
        'print',
        'excel'
      ]
    };

  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.dtTrigger.next();
    }, 3000);

  }

  resetSearch() {
    this.resultInventories = this.inventories;
    this.setInv();
    this.redrawTable();
  }

  redrawTable(): void {
    if(this.datatableElement.dtInstance)
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
  }

  filter(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  leads;

  getLeads() {
    this.auth.getLeads().subscribe(leads => {
      this.leads = leads;
      this.getPropTypes();
      this.getUsers();
    }, (err) => {
      console.error(err);
    });
  }

  inventories;
  newinventories;
  resultInventories = [];

  getInventories() {
    let loc = "0";
    if (this.auth.isCityManager() == 'yes') {
      loc = this.auth.getlocation();
    }
    this.auth.getInventories().subscribe(inventories => {
      if (loc !== "0") {
        inventories = inventories.filter(function (inventory) {
          return inventory.cityId == loc;
        });
      }
      this.inventories = inventories;
      this.newinventories = inventories;
      this.cleaner();
      this.resultInventories = this.newinventories;
      this.setInv();
      this.redrawTable();
    }, (err) => {
      console.error(err);
    });
  }

  cleaner() {

    for (var i = (this.newinventories.length) - 1; i >= 0; i -= 1) {
      var cur = this.newinventories[i];
      var leadless = true;
      for (var j = 0; j < this.leads.length; j++) {

        if (cur.leadId == this.leads[j]._id) {
          leadless = false;
          if (this.leads[j].leadAdminStatus == 0) {
            this.newinventories.splice(i, 1);
            //console.log("deleted -> " + cur._id);
            break;
          }

          if (this.auth.isAgent()) {
            if (this.leads[j].leadAgentStatus == 0) {
              this.newinventories.splice(i, 1);
              break;
            }
          }

        }
      }
      if (leadless) this.newinventories.splice(i, 1);
    }
  }

  locations;

  getLocations() {
    this.auth.getLocations().subscribe(locations => {
      this.locations = locations;
      this.getCities();
      this.getSubLocations();
    }, (err) => {
      console.error(err);
    });
  }

  newSubLocations;
  newRRInventories;
  onLocationChange(id) {
    this.newSubLocations = this.sublocations.filter(function (sublocations) {
      return sublocations.locationId == id;
    });
    this.resultInventories = this.newRInventories;
    this.resultInventories = this.resultInventories.filter(function (inventory) {
      return inventory.locationId == id;
    });
    this.newRRInventories = this.resultInventories;
    this.setInv();
    this.redrawTable();
  }

  sublocations;

  getSubLocations() {
    this.auth.getSLocations().subscribe(sublocations => {
      this.sublocations = sublocations;
    }, (err) => {
      console.error(err);
    });
  }

  onSubLocationChange(id) {
    let resultInv = this.newRRInventories;
    this.resultInventories = resultInv.filter(function (inventory) {
      return inventory.sublocationId == id;
    });
    //console.log(this.resultInventories);
    this.setInv();
    this.redrawTable();
  }

  propertytypes;

  getPropTypes() {
    this.auth.getPropTypes().subscribe(propertytypes => {
      this.propertytypes = propertytypes;
      this.getLocations();
    }, (err) => {
      console.error(err);
    });
  }

  onTypeChange(id) {
    this.resultInventories = this.inventories;
    this.resultInventories = this.resultInventories.filter(function (inventory) {
      return inventory.propTypeId == id;
    });
    this.setInv();
    this.redrawTable();
  }

  cities;
  newcities;

  getCities() {
    this.auth.getCities().subscribe(cities => {
      this.cities = cities;
      this.newcities = cities;
      this.getInventories();
    }, (err) => {
      console.error(err);
    });
  }

  newLocations: Locations;
  newRInventories;
  onCityChange(id) {
    this.newLocations = this.locations.filter(function (location) {
      return location.cityId == id;
    });

    this.resultInventories = this.inventories;

    this.resultInventories = this.resultInventories.filter(function (inventory) {
      return inventory.cityId == id;
    });

    this.newRInventories = this.resultInventories;

    this.cities = this.newcities;

    this.cities = this.cities.filter(function (city) {
      return city._id == id;
    });
    this.setInv();
    this.redrawTable();
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

  setInv() {

    for (var i = 0; i < this.resultInventories.length; i++) {
      var type;

      for (var j = 0; j < this.propertytypes.length; j++) {
        if (this.propertytypes[j]._id == this.resultInventories[i].propTypeId) {
          this.resultInventories[i].type = this.propertytypes[j].type;
          type = this.resultInventories[i].type;
          break;
        }
      }

      if (this.resultInventories[i].street)
        this.resultInventories[i].location = type + " # " + this.resultInventories[i].propNumber + " ,St # " + this.resultInventories[i].street + ", ";
      else
        this.resultInventories[i].location = type + " # " + this.resultInventories[i].propNumber + ", ";

      for (var j = 0; j < this.sublocations.length; j++) {
        if (this.sublocations[j]._id == this.resultInventories[i].sublocationId) {
          this.resultInventories[i].location += this.sublocations[j].sublocation + ", ";
          break;
        }
      }

      for (var j = 0; j < this.locations.length; j++) {
        if (this.locations[j]._id == this.resultInventories[i].locationId) {
          this.resultInventories[i].location += this.locations[j].location + ", ";
          break;
        }
      }

      for (var j = 0; j < this.cities.length; j++) {
        if (this.cities[j]._id == this.resultInventories[i].cityId) {
          this.resultInventories[i].location += this.cities[j].name;
          break;
        }
      }

      if (this.resultInventories[i].areaUnit == 1) {
        this.resultInventories[i].newarea = this.resultInventories[i].area + " " + InventoryComponent.areaUnits.ONE;
      }
      if (this.resultInventories[i].areaUnit == 2) {
        this.resultInventories[i].newarea = this.resultInventories[i].area + " " + InventoryComponent.areaUnits.TWO;
      }
      if (this.resultInventories[i].areaUnit == 3) {
        this.resultInventories[i].newarea = this.resultInventories[i].area + " " + InventoryComponent.areaUnits.THREE;
      }

    }

  }

  viewLead(id) {

    for (var i = 0; i < this.leads.length; i++) {
      if (this.leads[i]._id == id) {
        this.leadService.setLead(this.leads[i]);

        if (this.leads[i].clientType == 1) {
          this.leadService.setClientType(InventoryComponent.clientTypes.ONE);
        }

        if (this.leads[i].clientType == 2) {
          this.leadService.setClientType(InventoryComponent.clientTypes.TWO);
        }
      }
    }

    for (var i = 0; i < this.inventories.length; i++) {
      if (this.inventories[i].leadId == id) {
        this.leadService.setInventory(this.inventories[i]);

        for (var j = 0; j < this.cities.length; j++) {
          if (this.cities[j]._id == this.inventories[i].cityId) {
            this.leadService.setCity(this.cities[j]);
          }
        }

        for (var j = 0; j < this.propertytypes.length; j++) {
          if (this.propertytypes[j]._id == this.inventories[i].propTypeId) {
            this.leadService.setPropertyType(this.propertytypes[j]);
          }
        }

        for (var j = 0; j < this.locations.length; j++) {
          if (this.locations[j]._id == this.inventories[i].locationId) {
            this.leadService.setLocation(this.locations[j]);
          }
        }

        if (this.inventories[i].areaUnit == 1) {
          this.leadService.setAreaUnit(InventoryComponent.areaUnits.ONE);
        }
        if (this.inventories[i].areaUnit == 2) {
          this.leadService.setAreaUnit(InventoryComponent.areaUnits.TWO);
        }
        if (this.inventories[i].areaUnit == 3) {
          this.leadService.setAreaUnit(InventoryComponent.areaUnits.THREE);
        }
      }
    }

    if (this.leadService.getLead && this.leadService.getInventory) {
      this.router.navigateByUrl('/viewlead');
    }


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
      this.leadService.setIsLead(false);
      this.router.navigateByUrl('/editlead');
    }

  }

  delModal(id) {
    this.inventoryId = id;
    console.log(this.inventoryId);
  }

  deleteLead() {

    let id = this.inventoryId;

    for (var i = 0; i < this.inventories.length; i++) {
      if (this.inventories[i].leadId == id) {
        this.inventories.splice(i, 1);
        break;
      }
    }

    let isAdmin;

    if (this.auth.isAdmin()) isAdmin = true;
    if (this.auth.isAgent()) isAdmin = false;

    let status: Status = {
      "sid": 0,
      "lid": id,
      "isAdmin": isAdmin
    }

    //console.log(isAdmin);

    this.auth.updateStatus(status).subscribe(() => {
      console.log("success");
    }, (err) => {
      console.error(err);
    });

  }

  addInventory() {
    this.leadService.setIsLead(false);
    this.router.navigateByUrl('/add');
  }

  getClientDetails(id) {
    let lead = this.leads.filter(function (l) {
      return l._id == id;
    });
    return lead[0];
  }

  users;
  getUsers() {
    this.auth.getUsers().subscribe(users => {
      this.users = users;
    }, (err) => {
      console.error(err);
    });
  }

  getUserDetails(id) {
    let user = this.users.filter(function (u) {
      return u._id == id;
    });
    if(user !== []) return user[0];
    return "";
  }

  addToWeb(inv) {
    localStorage.setItem('inv', JSON.stringify(inv));
  }

  ////////////////////////////////////
  ////////// Search
  ////////////////////////////////////

  toggleSearch() {
    let x = document.getElementById("search");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  areaChange(event: any) {
    let value = event.target.value;
    if (value == 1) {
      this.resultInventories = $.map(this.inventories, function (entry) {
        if (entry.areaUnit == 2) {
          entry.area = entry.area * 272;
        }
        if (entry.areaUnit == 3) {
          entry.area = entry.area * 5445;
        }
        entry.area = +parseFloat(entry.area).toFixed(2);
        entry.areaUnit = 1;
        return entry;
      });
      this.setInv();
      this.redrawTable();
    }

    if (value == 2) {
      this.resultInventories = $.map(this.inventories, function (entry) {
        if (entry.areaUnit == 1) {
          entry.area = entry.area * 0.0037;
        }
        if (entry.areaUnit == 3) {
          entry.area = entry.area * 20;
        }
        entry.area = +parseFloat(entry.area).toFixed(2);
        entry.areaUnit = 2;
        return entry;
      });
      this.setInv();
      this.redrawTable();
    }

    if (value == 3) {
      this.resultInventories = $.map(this.inventories, function (entry) {
        if (entry.areaUnit == 1) {
          entry.area = entry.area * 0.00018;
        }
        if (entry.areaUnit == 2) {
          entry.area = entry.area * 0.05;
        }
        entry.area = +parseFloat(entry.area).toFixed(2);
        entry.areaUnit = 3;
        return entry;
      });
      this.setInv();
      this.redrawTable();
    }
  }

}
