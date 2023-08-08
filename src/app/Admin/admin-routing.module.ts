import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from 'auth/admin-auth.guard';
import { CustomerComponent } from './Admin/customer/customer.component';
import { AgentComponent } from './Admin/agent/agent.component';
import { AdminDashboardComponent } from 'Admin/admindashboard/admindashboard.component';

const routes: Routes = [
    {
      path: '',
      canActivate: [AdminAuthGuard],
      children: [
        { path: 'dashboard', component: AdminDashboardComponent },
        { path: 'agent', loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule) },
        { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      ],
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {}