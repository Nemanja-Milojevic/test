import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../@core/services/auth.service";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  // public loginData = {
  //   username: null,
  //   password: null,
  //   grant_type: 'password'
  // }

  public client_id = '5KYMVLRSOCCO34VPN0R73J6BHSM0AL.activepoints';
  public secret = '$2a$04$0AeyCQmMNHaIV1Zb0mUp5.i9ipTgR8TYCb1zslEbu8f5S5vkal4wK'

  constructor(private router: Router, private auth: AuthService, private toastrService: NbToastrService) {}

  ngOnInit() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('role')
  }

  login(username, password){
    let data = {
      username: null,
      password: null
    }

    data.username = username;
    data.password = password;
    this.auth.login(data).subscribe(
      res => {
        sessionStorage.setItem('token', res.access_token)
        sessionStorage.setItem('role', res.role)
        this.router.navigate(['/pages/dashboard'])
      },
      err => {
        if(err.status == 401){
          this.toastrService.warning('Wrong username or password', 'Warning')
        }else if(err.status == 403){
          this.toastrService.warning('Forbidden', 'Warning')
        }else if(err.status == 404){
          this.toastrService.warning('Not Found', 'Warning')
        }else if(err.status == 500){
          this.toastrService.warning('Server error', 'Warning')
        }else{
          this.toastrService.warning('There has been an error', 'Warning')
        }
      }
    )
  }
}
