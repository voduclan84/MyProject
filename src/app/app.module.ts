import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { aapRoutes } from './route/route-routing.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    EmployeeDetailComponent,
    EmployeeOverviewComponent,
    EmployeeProjectComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, aapRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
