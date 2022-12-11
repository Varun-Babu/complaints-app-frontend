import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-file-complaint',
  templateUrl: './file-complaint.component.html',
  styleUrls: ['./file-complaint.component.css']
})
export class FileComplaintComponent {
  complaint=""

  constructor(private api:ApiService){}
  readValue = () => {
    let data:any = {"userId":localStorage.getItem("userInfo"),
      "complaint":this.complaint}
  
    this.api.AddComplaint(data).subscribe(
      (response:any)=>{
        console.log(response)
        
        
      }
    )
  }

}
