import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  public employees: any[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.GetList().subscribe((response: any) => {
      this.employees = response;
      console.log(response);
    });
  }


}
