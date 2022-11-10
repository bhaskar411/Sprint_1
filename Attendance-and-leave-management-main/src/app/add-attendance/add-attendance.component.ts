import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Attendance } from '../models/attendance';
import { Status } from '../models/status';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {

  attForm!:FormGroup;
  status=Status;
  empid!:number;
  
    constructor(private attService:AttendanceService,private router:Router) { }
  
    ngOnInit(): void {
      var values = JSON.parse(localStorage.getItem('UserInfo') || '{}');    
      this.empid = values.employeeId;
      this.attForm=new FormGroup(
        {        
          employeeId:new FormControl(this.empid,Validators.required),
          dateTime:new FormControl("",Validators.required),
          status:new FormControl(null,Validators.required)
            
        }
      );
  
    }
    onSubmit()
    {
      console.log(this.attForm.value);
      this.attService.add(this.attForm.value as unknown as Attendance).subscribe(result=>{
        alert('Attendance added successfully');
        //navigate back to the link
        
      }, err=>{
        console.log(err);
        alert('Attendance failed (No future days allowed)');
      })
      
    }

    
    isNumber(id : any):boolean{
      return typeof id === 'number';
    }
  }
  
