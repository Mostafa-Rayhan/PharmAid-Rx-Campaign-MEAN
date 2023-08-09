import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerformComponent } from './agent/customerform/customerform.component';
import { CustomerinfoComponent } from './agent/customerinfo/customerinfo.component';
import { CustomerComponent } from './Admin/customer/customer.component';
import { AgentComponent } from './Admin/agent/agent.component';
import { AgentdashboardComponent } from './agent/agentdashboard/agentdashboard.component';

import { SignInComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component';


const routes: Routes = [
  { path: 'agentdashboard', component: AgentdashboardComponent },
  { path: 'customerform', component: CustomerformComponent },
  { path: 'customerinfo', component: CustomerinfoComponent },
  { path: 'admin/customer', component: CustomerComponent },
  { path: 'admin/agent', component: AgentComponent },

  { path: 'auth/signin', component: SignInComponent },
  { path: 'auth/signup', component: SignUpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
