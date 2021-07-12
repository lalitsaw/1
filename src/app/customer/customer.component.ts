import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {

  message : string ='Cutomer Management System';
  custObj : any = {
    CustomerCode :1001,
    CustomerName:'Lalit',
    CustomerAmount :'INR 500',
  }
}
