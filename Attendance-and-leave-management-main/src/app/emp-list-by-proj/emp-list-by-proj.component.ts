import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Designation } from '../models/designation';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-list-by-proj',
  templateUrl: './emp-list-by-proj.component.html',
  styleUrls: ['./emp-list-by-proj.component.css']
})
export class EmpListByProjComponent implements OnInit {
  designation = Designation;
  empList!:Employee[];
  projId!:number;

  constructor(private empService:EmployeeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.projId = this.route.snapshot.params['id'];
    console.log('Proj id'+ this.projId);
    this.empService.getEmpList().subscribe(list=>{
      //console.log(list);
      this.empList=list;
    },err=>{
      console.log(err);
      alert('API call failed');
    })
  }



  isProjectId(id:number){
    if(id == this.projId) return true;
    return false;
  }

  


}
