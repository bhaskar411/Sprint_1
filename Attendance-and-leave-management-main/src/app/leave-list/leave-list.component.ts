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
    if(confirm('Do you want to accept'))
    {
    this.leave = this.leaveList.filter(
      l => l.id === id)[0];
    console.log(this.leave);

    if(this.leave.statusType == 3)
    {
      this.leave.statusType = 1;
    }
    else{
      alert("Action Not Allowed");
      return;
    }
    
    //console.log(this.leave);
    this.leaveService.update(this.leave).subscribe(result=>{
      alert('Leave accepted');
      //redirect to emp List
      this.ngOnInit();
     },err=>{
      alert('Leave Accept failed');
     })
    console.log(id)
  }
}

  isNotEmployee():boolean{
    var values = JSON.parse(localStorage.getItem('UserInfo') || '{}');
    if(values.designation == 2) return false
    return true;
  }


  isManagerId(manId:number,empId:number):boolean{
    var values = JSON.parse(localStorage.getItem('UserInfo') || '{}');

    if(values.designation == 1){
      if(manId == values.employeeId) return true;
    }
    else if (values.designation == 0 ) {
        return true;
      
    } else  if(empId == values.employeeId) return true;

    else{
      return false;
    }
      return false;
    // if(id == empid || values.designation == 0) return true;
    // return false;
  }

  reject(id:number){
    if(confirm('do you want to reject'))
    {
    this.leave = this.leaveList.filter(
      l => l.id === id)[0];
    console.log(this.leave);
    if(this.leave.statusType == 3)
    {
      this.leave.statusType = 2;
    }
    else{
      alert("Action Not Allowed");
      return;
    }
    //console.log(this.leave);
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



delete(id:number){
  if(confirm('do you want to delete'))
{
  console.log('deleting');
  this.leave = this.leaveList.filter(
    l => l.id === id)[0]; 

  if(this.leave.statusType == 3)
  {
    console.log("if");
  this.leaveService.delete(id).subscribe(result=>{
    alert('Leave Request deleted');
    this.ngOnInit();
  }, err=>{
    console.log(err);
  alert('Delete failed')  
  })}else{
    alert("Action not Allowed");
  }
  
}
}

}
