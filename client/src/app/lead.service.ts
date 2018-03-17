import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeadService {

  private leads;
  private lead;

  setLeads(leads) {
    this.leads = leads;
  }

  getLeads(): Observable<any> {
    return this.leads;
  }

  setLead(lead) {
    this.lead = lead;
  }

  getLead(): Observable<any> {
    return this.lead;
  }

  private inventory;
  private inventories;

  setInventory(inventory) {
    this.inventory = inventory;
  }

  getInventory(): Observable<any> {
    return this.inventory;
  }

  setInventories(inventories) {
    this.inventories = inventories;
  }

  getInventories(): Observable<any> {
    return this.inventories;
  }

  private city;
  private cities;

  setCity(city) {
    this.city = city;
  }

  getCity(): Observable<any> {
    return this.city;
  }

  setCities(cities) {
    this.cities = cities;
  }

  getCities(): Observable<any> {
    return this.cities;
  }

  private propertytype;
  private propertytypes;

  setPropertyType(propertytype) {
    this.propertytype = propertytype;
  }

  getPropertyType(): Observable<any>  {
    return this.propertytype;
  }

  setPropertyTypes(propertytypes) {
    this.propertytypes = propertytypes;
  }

  getPropertyTypes(): Observable<any>  {
    return this.propertytypes;
  }

  private location;
  private locations;

  setLocation(location) {
    this.location = location;
  }

  getLocation(): Observable<any>  {
    return this.location;
  }

  setLocations(locations) {
    this.locations = locations;
  }

  getLocations(): Observable<any>  {
    return this.locations;
  }

  private areaUnit;

  setAreaUnit(areaUnit) {
    this.areaUnit = areaUnit;
  }

  getAreaUnit(): Observable<any>  {
    return this.areaUnit;
  }

  private clientType;

  setClientType(clientType) {
    this.clientType = clientType;
  }

  getClientType(): Observable<any>  {
    return this.clientType;
  } 

  private user;

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  constructor() { }

}
