import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Designation } from '../models/designation';
import { Employee } from '../models/employee';
import { Project } from '../models/project';
import { User } from '../models/user';
import { EmployeeService } from '../services/employee.service';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  empForm!: FormGroup;
  empList!: Employee[];
  projList!: Project[];


  designation= Designation;
  
  constructor(private empService: EmployeeService,
    private router: Router, private userService:UserService, private projService: ProjectService,) { }

  ngOnInit(): void {
    this.empService.getEmpList().subscribe(list=>{
      this.empList=list;
    },err=>{
      console.log(err);
    })

    this.projService.getList().subscribe(list=>{
      this.projList=list;
      //console.log(list)
    },err=>{
      console.log(err);
    })

    this.empForm= new FormGroup({
      
      "name": new FormControl("",Validators.required),
      "dateOfBirth": new FormControl("",Validators.required),
      "managerId": new FormControl("",Validators.required),
      "email": new FormControl("",[Validators.required,Validators.email]),
      "mobileNo": new FormControl("",[Validators.required]),
      "projectId": new FormControl("",Validators.required),
      "designation": new FormControl("",Validators.required),
      
    });


  }

  onSubmit(){
    //console.log(this.empForm);
     //services
     this.empService.add(this.empForm.value as unknown as Employee).subscribe(result=>{     
      //redirect to emp List
      this.router.navigate(['/employees']);
     },err=>{
      alert('Add employee failed');
     })

     this.projService.getList().subscribe(list=>{
      this.projList=list;
      console.log(list)
    },err=>{
      console.log(err);
    })
  }

  isNumber(id:any) : boolean{
     return typeof id === 'number'; 
  }

}

