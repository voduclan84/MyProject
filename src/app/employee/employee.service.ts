import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  GetList(): any[] {
    let employees: any[] = [
      { ID: 1, Name: "Vo Duc Lan" },
      { ID: 2, Name: "Bui Cong Thanh" },
      { ID: 3, Name: "Nguyen Van Toan" },
      { ID: 4, Name: "Nguyen Thi Thuy Linh" },
    ];
    return employees;
  }
}
