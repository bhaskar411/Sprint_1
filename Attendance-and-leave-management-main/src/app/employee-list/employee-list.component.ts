import { Component, OnInit } from '@angular/core';
import { Designation } from '../models/designation';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  empList! :Employee[];
  designation=Designation;
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmpList().subscribe(list=>{
      //console.log(list);
      this.empList=list;
    },err=>{
      console.log(err);
      alert('API call failed');
    })
  }

  isManagerId(id:number):boolean{
    var values = JSON.parse(localStorage.getItem('UserInfo') || '{}');    
    let empid = values.employeeId;

    if(id == empid || values.designation == 0) return true;
    return false;
  }

  delete(id:number){
    if(confirm('Do you really want to delete employee')){
    console.log('deleting');
    this.empService.delete(id).subscribe(result=>{
    alert('Employee deleted');
    this.ngOnInit();
    }, err=>{
    console.log(err);
    alert('Delete employee failed');
    })
    }
    }

}
