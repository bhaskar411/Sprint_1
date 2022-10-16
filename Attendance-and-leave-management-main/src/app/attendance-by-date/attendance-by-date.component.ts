import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Attendance } from '../models/attendance';
import { Status } from '../models/status';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-attendance-by-date',
  templateUrl: './attendance-by-date.component.html',
  styleUrls: ['./attendance-by-date.component.css']
})
export class AttendanceByDateComponent implements OnInit {
  attList!:Attendance[];
  dateForm!:FormGroup;
  status = Status;
  date!:number;
  constructor(private attService:AttendanceService) { }

  ngOnInit(): void {

    this.dateForm = new FormGroup({
      finddate: new FormControl("",Validators.required)
    })
    console.log(this.dateForm.value);

    





    this.attService.getList().subscribe(list=>{
      //console.log(list);
      this.attList=list;
    }, err=>{
      console.log(err);
      alert('Api Call Failed');
    })
  }
  delete(id:number){
    if(confirm('do you want to delete'))
  {
    console.log('deleting');
    this.attService.delete(id).subscribe(result=>{
      alert('Attendance deleted');
      this.ngOnInit();
    }, err=>{
      console.log(err);
    alert('Delete failed')  
    })
    
  }
  }


  isDate(id:number):boolean{

    if(id == this.date ) return true;
    return false;
  }

  onSubmit(){
    this.date = this.dateForm.get('findDate')?.value as number;
    //console.log(this.date);

  }

}