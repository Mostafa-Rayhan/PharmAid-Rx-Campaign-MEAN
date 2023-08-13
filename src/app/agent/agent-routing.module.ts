import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AgentAuthGuard } from '../auth/agent-auth.guard';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { CustomerformComponent } from './customerform/customerform.component';



const routes: Routes = [
    {
      path: '',
      canActivate: [AgentAuthGuard],
      children: [
        { path: 'agentdashboard', component: AgentdashboardComponent },
        { path: 'customerform', component: CustomerformComponent },
        { path: 'customerinfo', component: CustomerinfoComponent },
        // { path: 'customerdetails/:id', component: CustomerdetailsComponent },
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      ],
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AgentRoutingModule {}