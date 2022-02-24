import { Component, OnInit } from '@angular/core';
import { HttpDataService } from './services/http-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud-app';

  users:any[]=[];
  errorMessage: any= 'Loading ...';
  err1:any;
  err2:any;
  constructor(private userService: HttpDataService){

  }

  ngOnInit(): void {
     this.userService.getAllUsers().subscribe((data: any)=>{
       this.users= data;
     }, (err: any)=>{
       console.log("error code", err.status)
       console.log("error message", err.message)
       this.err1= err.status;
       this.err2= err.message;
       this.errorMessage= this.err2
     })
  }
}
