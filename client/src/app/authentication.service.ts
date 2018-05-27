import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

// For Users

export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
  access: number;
  privelege?: string;
  id?: string;
  location?: string;
  cityManager?: number;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  location?: string;
  city?: string;
  access?: Number;
  cityManager?: Number;
  status?: Number;
}

// For city

export interface Cities {
  _id: string;
  name: string;
}

export interface City {
  name: string
}

// For location

export interface Location {
  cityId: Number,
  location: string,
  sublocation: string
}

export interface Locations {
  _id: string,
  cityId: Number,
  location: string
}

// For PropertyType

export interface PropertyType {
  type: string
}

export interface PropertyTypes {
  _id: string,
  type: string
}

// For StatusType

export interface StatusType {
  type: string
}

export interface StatusTypes {
  _id: string,
  type: string
}

// For Lead

export interface Lead {
  purpose: Number,
  cityId: Number,
  locationId: Number,
  sublocationId: Number,
  propTypeId: Number,
  propNumber: String,
  street: String,
  demand: Number,
  area: String,
  areaUnit: Number,
  beds: Number,
  clientName: String,
  clientType: Number,
  phoneNumber: String,
  assignedTo: Number,
  leadAdminStatus: Number,
  leadAgentStatus: Number,
  cmt: String
}

export interface Leads {
  _id: Number,
  inventoryId: Number,
  clientName: String,
  clientType: Number,
  phoneNumber: String,
  leadAdminStatus: Number,
  leadAgentStatus: Number,
  assignedTo: String
}

export interface userId {
  _id: Number
}

export interface Inventories {
  _id: Number,
  leadId: Number,
  purpose: Number,
  cityId: Number,
  locationId: Number,
  sublocationId: Number,
  propTypeId: Number,
  propNumber: String,
  street: String,
  demand: Number,
  area: String,
  areaUnit: Number,
  beds: Number,
  propertyStatus: Number
}

export interface Status {
  sid: Number,
  lid: Number,
  isAdmin: boolean
}

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  // For token

  private token: string;
  private privelege: string;
  private id: string;
  private location: string;
  private cityManager: string;

  private saveToken(token: string, privelege: string): void {
    localStorage.setItem('mean-token', token);
    localStorage.setItem('mean-privelege', privelege);
    this.token = token;
    this.privelege = privelege;
  }

  private saveId(id: string) {
    localStorage.setItem('mean-id', id);
    this.id = id;
  }

  public getId() {
    if (!this.id) {
      this.id = localStorage.getItem('mean-id');
    }
    return this.id;
  }

  private saveLocation(location: string) {
    localStorage.setItem('mean-location', location);
    this.location = location;
  }

  public getlocation() {
    if (!this.location) {
      this.location = localStorage.getItem('mean-location');
    }
    return this.location;
  }

  private saveCityManager(cityManager: string) {
    localStorage.setItem('mean-cityManager', cityManager);
    this.cityManager = cityManager;
  }

  public isCityManager() {
    this.cityManager = localStorage.getItem('mean-cityManager');
    if (this.cityManager == null) return null;
    if (!this.cityManager) {
      this.cityManager = localStorage.getItem('mean-cityManager');
    }
    return this.cityManager;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  private getPrivelege(): string {
    if (!this.privelege) {
      this.privelege = localStorage.getItem('mean-privelege');
    }
    return this.privelege;
  }

  // For user

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public isAdmin(): boolean {
    const privelege = this.getPrivelege();
    if (privelege == 'ADMIN') {
      return true;
    } else {
      return false;
    }
  }

  public isAgent(): boolean {
    const privelege = this.getPrivelege();
    if (privelege == 'AGENT') {
      return true;
    } else {
      return false;
    }
  }

  private request(
    method: 'post' | 'get',
    type?: 'login' | 'register' | 'profile' | 'getUsers' | 'addCity' | 'getCities' |
      'addLoc' | 'getLocations' | 'addPropType' | 'getPropTypes' | 'addLead' | 'getLeads' |
      'getInventories' | 'updateLead' | 'updateUser' | 'addStatusType' | 'getStatusTypes' |
      'updateStatus' | 'getSLocations' | 'updateCity' | 'deleteCity' | 'updateLoc' | 'deleteLoc' |
      'updatePropType' | 'deletePropType' | 'updateStatusType' | 'deleteStatusType' | 'deleteUser' | 
      'sendMessage',
    template?: TokenPayload | City | Location | PropertyType | Lead | Status):
    Observable<any> {

    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, template);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          if (data.access == 1) data.privelege = 'ADMIN';
          if (data.access == 2) data.privelege = 'AGENT';
          this.saveToken(data.token, data.privelege);
          this.saveId(data.id);
          this.saveLocation(data.location);
          if (data.cityManager == 1) this.saveCityManager("yes");
          else this.saveCityManager(null);
        }
        return data;
      })
    );

    return request;
  }

  // For user 

  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  public getUsers(): Observable<any> {
    return this.request('get', 'getUsers');
  }

  public updateUser(user): Observable<any> {
    return this.request('post', 'updateUser', user);
  }

  public deleteUser(user): Observable<any> {
    return this.request('post', 'deleteUser', user);
  }

  // For city

  public addCity(city: City): Observable<any> {
    return this.request('post', 'addCity', city);
  }

  public getCities(): Observable<any> {
    return this.request('get', 'getCities');
  }

  public updateCity(city): Observable<any> {
    return this.request('post', 'updateCity', city);
  }

  public deleteCity(city): Observable<any> {
    return this.request('post', 'deleteCity', city);
  }

  // For location

  public addLoc(location: Location): Observable<any> {
    return this.request('post', 'addLoc', location);
  }

  public getLocations(): Observable<any> {
    return this.request('get', 'getLocations');
  }

  public getSLocations(): Observable<any> {
    return this.request('get', 'getSLocations');
  }

  public updateLocation(location): Observable<any> {
    return this.request('post', 'updateLoc', location);
  }

  public deleteLocation(location): Observable<any> {
    return this.request('post', 'deleteLoc', location);
  }

  // For property type

  public addPropType(propType: PropertyType): Observable<any> {
    return this.request('post', 'addPropType', propType);
  }

  public getPropTypes(): Observable<any> {
    return this.request('get', 'getPropTypes');
  }

  public updatePropType(propType): Observable<any> {
    return this.request('post', 'updatePropType', propType);
  }

  public deletePropType(propType): Observable<any> {
    return this.request('post', 'deletePropType', propType);
  }

  // For status type

  public addStatusType(statusType: StatusType): Observable<any> {
    return this.request('post', 'addStatusType', statusType);
  }

  public updateStatus(status: Status): Observable<any> {
    return this.request('post', 'updateStatus', status);
  }

  public getStatusTypes(): Observable<any> {
    return this.request('get', 'getStatusTypes');
  }

  public updateStatusType(statusType): Observable<any> {
    return this.request('post', 'updateStatusType', statusType);
  }

  public deleteStatusType(statusType): Observable<any> {
    return this.request('post', 'deleteStatusType', statusType);
  }

  // For lead

  public addLead(lead: Lead): Observable<any> {
    return this.request('post', 'addLead', lead);
  }

  public updateLead(lead: Lead): Observable<any> {
    return this.request('post', 'updateLead', lead);
  }

  public getLeads(): Observable<any> {

    if (this.isAgent()) {
      return this.http.get("/api/getLeads", {
        params: { user_id: this.getId() },
        headers: { Authorization: `Bearer ${this.getToken()}` }
      });
    }

    return this.request('get', 'getLeads');
  }

  public getInventories(): Observable<any> {
    return this.request('get', 'getInventories');
  }

  // For Message
  public sendMessage(msg): Observable<any> {
    return this.request('post', 'sendMessage', msg);
  }

  // For logout

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }
}
