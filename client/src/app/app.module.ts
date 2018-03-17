import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { ProfileComponent } from './users/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { LeadsComponent } from './leads/leads.component';
import { AddLeadComponent } from './leads/add-lead/add-lead.component';
import { OptionsComponent } from './options/options.component';
import { LeadService } from './lead.service';
import { InventoryComponent } from './inventory/inventory.component';
import { EditLeadComponent } from './leads/edit-lead/edit-lead.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuardService] },
  { path: 'leads', component: LeadsComponent, canActivate: [AuthGuardService] },
  { path: 'add', component: AddLeadComponent, canActivate: [AuthGuardService] },
  { path: 'editlead', component: EditLeadComponent, canActivate: [AuthGuardService] },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuardService] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'edituser', component: EditUserComponent, canActivate: [AuthGuardService] },
  { path: 'options', component: OptionsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    LeadsComponent,
    AddLeadComponent,
    OptionsComponent,
    InventoryComponent,
    EditLeadComponent,
    UsersComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    DataTablesModule
  ],
  providers: [
    AuthenticationService, 
    AuthGuardService,
    LeadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
