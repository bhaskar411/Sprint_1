import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Designation } from '../models/designation';
import { Employee } from '../models/employee';
import { User } from '../models/user';
import { EmployeeService } from '../services/employee.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted:boolean = false;
  changeForm!:FormGroup;
  design = Designation;

  constructor(private builder:FormBuilder ,private userService:UserService, private router :Router) { }

  ngOnInit(): void { 
    this.changeForm = this.builder.group({
      employeeId:new FormControl("",Validators.required),
      username:new FormControl("",Validators.required),
      password:new FormControl("",[Validators.required,Validators.minLength(6)]),
      designation:new FormControl("",Validators.required)

  
  });}
  
  onSubmit(){

    this.submitted = true;
    if(this.changeForm.invalid){
      return;
    }
    this.userService.register(this.changeForm.value as unknown as User).subscribe(result => {      
      alert('User Registered Successfully');
      this.router.navigate(['']);
    },err => {
      alert("Worng Username or Password")
      console.log(err);
    })

  }

  isNumber(id:any) : boolean{
    return typeof id === 'number'; 
 }

}