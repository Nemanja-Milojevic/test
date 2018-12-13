import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',  
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {

  constructor(private router: Router) {}


  goToStudents(){
    this.router.navigate(['/pages/students'])
  }

  goToAddStudent(){
    this.router.navigate(['/pages/addstudent'])
  }

  goToClasses(){
    this.router.navigate(['/pages/classes'])
  }

  goToAddClass(){
    this.router.navigate(['/pages/addclass'])
  }

  goToSchools(){
    this.router.navigate(['/pages/schools'])
  }

  goToAddSchool(){
    this.router.navigate(['/pages/addschool'])
  }
}
