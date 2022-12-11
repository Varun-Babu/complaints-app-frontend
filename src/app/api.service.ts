import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  UserLogin = (dataToSend:any) =>{
    return this.http.post("http://localhost:8080/Login",dataToSend)
  }
  AddComplaint = (DataToSend:any) => {
    return this.http.post("http://localhost:8080/complaint",DataToSend)
  }
  AllComplaint = () => {
    return this.http.get("http://localhost:8080/adminComplaint")
  }
  UserComplaint = (DataToSend:any) => {
    return this.http.post("http://localhost:8080/userComplaint",DataToSend)
  }
}
