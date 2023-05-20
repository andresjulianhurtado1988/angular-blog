import { Component } from '@angular/core';
import { CustomerService } from "../../services/customer.service";
import { Customers } from './../../models/customer';
import { Cities } from "../../models/cities";
import { CityService } from "../../services/city.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService, CityService],
})
export class CustomerComponent {

  public page_title: string;
  public status: string;
  public custom: Customers;
  public cities: any[];
  public customer: any[];

  constructor(
    private _customerService: CustomerService,
    private _cityService: CityService
  ){
    this.page_title = 'Registrar Cliente';
    this.status = '';
    this.custom = new Customers(1, '', '', '', '', '', 0);
    this.cities = [];
    this.customer = [];

  }

  ngOnInit(){
    this.getCities();
    this.getCustomers();
  }

  getCities(){

    this._cityService.getCities().subscribe(
      response => { 
        if (response.status == "success") {
          this.cities = response.cities;
        }else {
          this.status = 'error';
        }
      
      },
      error => {
          this.status = 'error';
        console.log(<any>error);
      }
    );

  }

  onSubmit(form: any){

    this._customerService.register(this.custom).subscribe(
      response => { 
        if (response.status == "success") {
          this.status = response.status;
          form.reset();
          this.getCustomers();
        }else {
          this.status = 'error';
        }
      
      },
      error => {
          this.status = 'error';
        console.log(<any>error);
      }
    );
    
  }

  getCustomers(){

    this._customerService.getCustomers().subscribe(
      response => { 
        if (response.status == "success") {
          this.customer = response.customer;
        }else {
          this.status = 'error';
        }
      
      },
      error => {
          this.status = 'error';
        console.log(<any>error);
      }
    );

  }

}
