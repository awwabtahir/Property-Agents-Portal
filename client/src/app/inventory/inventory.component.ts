import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LeadService } from '../lead.service';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';

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

  dtOptions: any = {};

  constructor(private auth: AuthenticationService, private router: Router,
    private leadService: LeadService) { }

  ngOnInit() {
    this.getLeads();
    // this.getPropTypes();
    // this.getLocations();
    // this.getCities();
    // this.getInventories();

    // We need to call the $.fn.dataTable like this because DataTables typings do not have the "ext" property
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      const demand = parseFloat(data[4]) || 4; // use data for the id column
      if ((isNaN(this.minD) && isNaN(this.maxD)) ||
        (isNaN(this.minD) && demand <= this.maxD) ||
        (this.minD <= demand && isNaN(this.maxD)) ||
        (this.minD <= demand && demand <= this.maxD)) {
        return true;
      }
      return false;
    });

    this.dtOptions = {
      responsive: true
    };
  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function () {
          const that = this;
          $('#invInput21', this.footer()).on('keyup change', function () {
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

  filterByDemand(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  filterByArea(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  leads;

  getLeads() {
    this.auth.getLeads().subscribe(leads => {
      this.leads = leads;
      this.getPropTypes();
    }, (err) => {
      console.error(err);
    });
  }

  inventories;
  resultInventories;

  getInventories() {
    this.auth.getInventories().subscribe(inventories => {
      this.inventories = inventories;
      this.resultInventories = this.inventories;
      this.setInv();
    }, (err) => {
      console.error(err);
    });
  }

  locations;

  getLocations() {
    this.auth.getLocations().subscribe(locations => {
      this.locations = locations;
      this.getCities();
    }, (err) => {
      console.error(err);
    });
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

  cities;

  getCities() {
    this.auth.getCities().subscribe(cities => {
      this.cities = cities;
      this.getInventories();
    }, (err) => {
      console.error(err);
    });
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

    for (var i = 0; i < this.inventories.length; i++) {
      var type;

      for (var j = 0; j < this.propertytypes.length; j++) {
        if (this.propertytypes[j]._id == this.inventories[i].propTypeId) {
          this.inventories[i].type = this.propertytypes[j].type;
          type = this.inventories[i].type;
          break;
        }
      }

      this.inventories[i].location = type + " # " + this.inventories[i].propNumber + " ,St # " + this.inventories[i].street + ", ";

      for (var j = 0; j < this.locations.length; j++) {
        if (this.locations[j]._id == this.inventories[i].locationId) {
          this.inventories[i].location += this.locations[j].location + ", ";
          break;
        }
      }

      for (var j = 0; j < this.cities.length; j++) {
        if (this.cities[j]._id == this.inventories[i].cityId) {
          this.inventories[i].location += this.cities[j].name;
          break;
        }
      }

      if (this.inventories[i].areaUnit == 1) {
        this.inventories[i].newarea = this.inventories[i].area + " " + InventoryComponent.areaUnits.ONE;
      }
      if (this.inventories[i].areaUnit == 2) {
        this.inventories[i].newarea = this.inventories[i].area + " " + InventoryComponent.areaUnits.TWO;
      }
      if (this.inventories[i].areaUnit == 3) {
        this.inventories[i].newarea = this.inventories[i].area + " " + InventoryComponent.areaUnits.THREE;
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

  addInventory() {
    this.leadService.setIsLead(false);
    this.router.navigateByUrl('/add');
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
    }
  }

}
