import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'employee',component:EmployeeComponent},
  {path:'employee-detail/:id',component:EmployeeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
export const aapRoutes = RouterModule.forRoot(routes);
