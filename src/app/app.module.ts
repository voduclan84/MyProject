import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { aapRoutes } from './route/route-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, aapRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
