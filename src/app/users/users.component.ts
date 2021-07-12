import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  userList : any;
  ngOnInit(): void {

    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(results =>{
      this.userList  = results;
    console.log(results);    
    },(error) =>{console.log('Thre is error : '+error)} )
  }

}
