import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http: HttpClient) { }
  // getAllUsers(){
  //   return [
  //     {id:101, name: "john", city: "delhi", salary: 1000, dob: new Date("04/10/1998")},
  //     {id:101, name: "john", city: "delhi", salary: 1000, dob: new Date("04/10/1998")},
  //     {id:101, name: "john", city: "delhi", salary: 1000, dob: new Date("04/10/1998")},
  //     {id:101, name: "john", city: "delhi", salary: 1000, dob: new Date("04/10/1998")},
  //     {id:101, name: "john", city: "delhi", salary: 1000, dob: new Date("04/10/1998")}
  
  //   ]
  // }

  getAllUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    }
  }