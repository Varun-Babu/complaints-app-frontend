import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-complants',
  templateUrl: './user-complants.component.html',
  styleUrls: ['./user-complants.component.css']
})
export class UserComplantsComponent {
  // id:any=[]
  // constructor(private api:ApiService){
  //   this.id = localStorage.getItem("userInfo")
  //   api.UserComplaint(this.id).subscribe(
  //     (response) =>{
  //       console.log(response)
  //     }
  //   )
  // }
}
