import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";



const routes: Routes = [
    {
      path: '',
      canActivate: [AgentAuthGuard],
      children: [
        { path: 'agentdashboard', component: AgentDashboardComponent },
        { path: 'customerinfo', component: CustomerInfoComponent },
        { path: 'customer-details/:id', component: CustomerDetailsComponent },
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      ],
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AgentRoutingModule {}