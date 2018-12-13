import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "addschool",
  templateUrl: "./addschool.component.html",
  styleUrls: ["./addschool.component.scss"]
})
export class AddschoolComponent implements OnInit {
  public school = {
    name: null,
    adminname: null,
    adminlastname: null,
    email: null,
    password: null,
    confirmpassword: null,
    number: null
  };

  constructor(private router: Router, private toastrService: NbToastrService) {}

  ngOnInit() {}

  

  add() {
    if(this.school.name == null || this.school.name.length == 0){
      this.toastrService.warning('School name is required', 'Warning')
    }else if(this.school.adminname == null || this.school.adminname.length == 0){
      this.toastrService.warning('Administrator Name is required', 'Warning')
    }else if(this.school.adminlastname == null || this.school.adminlastname.length == 0){
      this.toastrService.warning('Administrator Last Name is required', 'Warning')
    }else if(this.school.email == null || this.school.email.length == 0){
      this.toastrService.warning('Email is required', 'Warning')
    }else if(this.school.password == null || this.school.password.length == 0){
      this.toastrService.warning('Password is required', 'Warning')
    }else if(this.school.confirmpassword == null || this.school.confirmpassword.length == 0){
      this.toastrService.warning('Confirm password is required', 'Warning')
    }else if(this.school.number == null || this.school.number.length == 0){
      this.toastrService.warning('Number of Pupils/Students is required', 'Warning')
    }else{
      this.router.navigate(['/pages/schools'])
    }
  }
}
