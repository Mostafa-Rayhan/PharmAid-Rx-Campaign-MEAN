import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from '../auth/admin-auth.guard';
import { AdmindashboardComponent } from '../Admin/admindashboard/admindashboard.component';
import { AgentComponent } from './agent/agent.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
    {
      path: '',
      canActivate: [AdminAuthGuard],
      children: [
        { path: 'dashboard', component: AdmindashboardComponent },
        { path: 'agent', component: AgentComponent },
        { path: 'customer', component: CustomerComponent },
        // { path: 'agent', loadChildren: () => import('../Admin/agent/agent.module').then(m => m.AgentModule) },
        // { path: 'customer', loadChildren: () => import('./Admin/customer/customer.module').then(m => m.CustomerModule) },
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      ],
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {}