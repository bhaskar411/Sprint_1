import { Designation } from "./designation";
import { Project } from "./project";

export class Employee {
    id!: number;
    name!: string;
    dateOfBirth!: Date;
    managerID!: number;
    email!: string;
    mobileNo!: number;
    projectId!: number;
    project!:Project;
    designation!: Designation;
}
