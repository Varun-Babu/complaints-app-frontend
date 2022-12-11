import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  data:any =[]
  constructor(private api:ApiService){
    api.AllComplaint().subscribe(
      (response) =>{
        this.data = response
      }
    )
  }

}
