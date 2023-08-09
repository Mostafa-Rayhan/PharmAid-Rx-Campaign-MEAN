import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { CustomerComponent } from './Admin/customer/customer.component';
import { AgentComponent } from './Admin/agent/agent.component';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';


const routes: Routes = [
  { path: 'agentdashboard', component: AgentdashboardComponent },
  { path: 'customerform', component: CustomerformComponent },
  { path: 'customerinfo', component: CustomerinfoComponent },
  { path: 'admin/customer', component: CustomerComponent },
  { path: 'admin/agent', component: AgentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
