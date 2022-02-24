import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[]=[] as User[];
  errorMessage:string="";
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  getUsersData(){
    this.userService.getUsers().subscribe((data:User[])=>{
      this.users= data;
    }, (error)=>{
      this.errorMessage= error;
     })
  }

}
