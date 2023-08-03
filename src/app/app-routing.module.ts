import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerformComponent } from './customerform/customerform.component';

const routes: Routes = [
  { path: 'customerform', component: CustomerformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
