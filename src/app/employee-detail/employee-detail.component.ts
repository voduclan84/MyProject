import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
//import {Sbscription} from 'rxjs';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{

  public _id:string;
  public _name:string;
  public subscription:any;
  public employee:any;
  constructor(private empser:EmployeeService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(){
    this.subscription =this.activatedRouter.params.subscribe(params=>{
    this._id = params['id'];
      //let _ByteStringd:string = this.activatedRouter.snapshot.params['id'];
      this.empser.GetSingle(this._id).subscribe((response: any) => {
        this.employee = response;
  });
});  
  
      //alert(this._id);
    //}
    
  }
  
   GotoEmployee() {
    this.router.navigate(['employee']);
  }

}
