import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email=""
  password=""

  constructor(private router:Router){}

  readValue=()=>{
    let data:any ={"email":this.email,"password":this.password}
    console.log(data)
    if(this.email == "admin@nest" && this.password == "admin"){
      this.router.navigate(["/adminDash"])  
    }
    else{
      alert("invalid Credentials")
    }
  }

}
