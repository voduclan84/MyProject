import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from '../employee-overview/employee-overview.component';
import { EmployeeProjectComponent } from '../employee-project/employee-project.component';
import { LoginComponent } from '../login/login.component';
import { CheckLoginGuard } from '../check-login.guard';
import { LoginService } from '../login.service';
const routes: Routes = [
  {path: '',component:HomeComponent, canActivate:[CheckLoginGuard]},
  {path: 'employee',component:EmployeeComponent, canActivate:[CheckLoginGuard]},
  {path: 'login',component:LoginComponent},
  {path:'employee-detail/:id',component:EmployeeDetailComponent,children:[
    {path: 'overview',component:EmployeeOverviewComponent},
    {path:'project',component:EmployeeProjectComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
export const aapRoutes = RouterModule.forRoot(routes);
