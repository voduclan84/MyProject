import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.css']
})
export class EmployeeOverviewComponent implements OnInit {

  public parentRouterID:string;
  public sub:Subscription;
  constructor(private router: Router,private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.sub =this.activatedRouter.parent.params.subscribe(params=>{
      this.parentRouterID =params['id'];
       
    })
  }

}
