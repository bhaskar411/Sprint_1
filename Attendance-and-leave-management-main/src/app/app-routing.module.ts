import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { AttendanceByDateComponent } from './attendance-by-date/attendance-by-date.component';
import { RegisterComponent } from './register/register.component';
import { EmpListByProjComponent } from './emp-list-by-proj/emp-list-by-proj.component';

const routes: Routes = [
  {path:'projects' , component : ProjectListComponent},
  {path:'projects/add' , component : AddProjectComponent},
  {path:'projects/update/:id' , component : UpdateProjectComponent},
  {path:'home',component:HomeComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'employees/add',component:AddEmployeeComponent},
  {path:'employees/update/:id',component:UpdateEmployeeComponent},
  {path:"",component:LoginComponent},
  {path:"changepassword",component:ChangePasswordComponent},
  {path:'attendances',component:AttendenceListComponent},
  {path:'attendances/add',component:AddAttendanceComponent},
  {path:'attendances/ByDate',component:AttendanceByDateComponent},
  {path:'attendances/update/:id',component:UpdateAttendanceComponent},
  {path:'leaves',component:LeaveListComponent},
  {path:'leaves/add',component:AddLeaveComponent},
  {path:'register',component:RegisterComponent},
  {path:'projects/employees/:id',component:EmpListByProjComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 