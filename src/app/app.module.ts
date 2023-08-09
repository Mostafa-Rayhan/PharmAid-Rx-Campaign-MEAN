import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';

import { AdminsidenavComponent } from './Admin/adminsidenav/adminsidenav.component';
import { AdminheaderComponent } from './Admin/adminheader/adminheader.component';
import { AgentComponent } from './Admin/agent/agent.component';
import { CustomerComponent } from './Admin/customer/customer.component';
import { AdmindashboardComponent } from './Admin/admindashboard/admindashboard.component';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    CustomerformComponent,
    CustomerinfoComponent,
    AdminsidenavComponent,
    AdminheaderComponent,
    AgentComponent,
    CustomerComponent,
    AdmindashboardComponent,
    AgentdashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
       // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
