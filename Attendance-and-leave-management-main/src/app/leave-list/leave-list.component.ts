import { Component, OnInit } from '@angular/core';
import { Leave } from '../models/leave';
import { LeaveType } from '../models/leave-type';
import { StatusType } from '../models/status-type';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {
  leaveList!:Leave[];
  statustype = StatusType;
  leavetype = LeaveType;
  leave!: Leave;

  constructor(private leaveService:LeaveService) { }

  ngOnInit(): void {
    this.leaveService.getLeaveList().subscribe(list=>{
      //console.log(list);
      this.leaveList=list;
    },err=>{
      console.log(err);
      alert('API call failed');
    })
  }

  accept(id:number){
    this.leave = this.leaveList.filter(
      l => l.id === id)[0];
    console.log(this.leave);

    this.leave.statusType = 1;
    console.log(this.leave);
    this.leaveService.update(this.leave).subscribe(result=>{
      alert('Leave accepted');
      //redirect to emp List
      this.ngOnInit();
     },err=>{
      alert('Leave Accept failed');
     })
    console.log(id)
  }


  isManagerId(id:number):boolean{
    var values = JSON.parse(localStorage.getItem('UserInfo') || '{}');    
    let empid = values.employeeId;

    if(id == empid || values.designation == 0) return true;
    return false;
  }

  reject(id:number){
    this.leave = this.leaveList.filter(
      l => l.id === id)[0];
    console.log(this.leave);

    this.leave.statusType = 2;
    console.log(this.leave);
    this.leaveService.update(this.leave).subscribe(result=>{
      alert('Leave Reject');
      //redirect to emp List
      this.ngOnInit();
     },err=>{
      alert('Leave Accept failed');
     })
    console.log(id)
  }

}
