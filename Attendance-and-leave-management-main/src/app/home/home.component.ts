import { Component, OnInit } from '@angular/core';
import { Designation } from '../models/designation';
import {  Employee } from '../models/employee';
import { Project } from '../models/project';
import { EmployeeService } from '../services/employee.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empid!:number;
  project!:Project;
  empList! :Employee;
  designation=Designation;
  manager!: string;
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    var values = JSON.parse(localStorage.getItem('UserInfo') || '{}');    
    this.empid = values.employeeId;
    this.empService.getListById(this.empid).subscribe(emp=>{
      //console.log(emp);
      this.empList=emp;
    },err=>{
      console.log(err);
      alert('API call failed');
    });

    console.log(this.empList);

    if(this.empList.managerID != 0){
      console.log("hello");
      this.empService.getListById(this.empid).subscribe(emp=>{
        //console.log(emp);
        this.manager=emp.name;
        console.log(this.manager);
      },err=>{
        console.log(err);
        alert('API call failed');
      });}else{
        this.manager =  "No Manager";
      }
      


  }


}
