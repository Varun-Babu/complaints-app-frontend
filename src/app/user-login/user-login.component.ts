import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email=""
  password = ""

constructor(private api:ApiService, private router:Router){}

readValue = () => {
  let data:any = {"email":this.email,"password":this.password}
  console.log(data)
  this.api.UserLogin(data).subscribe(
    (response:any)=>{
      if(response.status == "success"){
        let userId = response.userId
        console.log(userId)
        localStorage.setItem("userInfo",userId)
        this.router.navigate(["/complaint"])
      }
      else{
        alert(response.message)
      }
    }
  )
}

}
