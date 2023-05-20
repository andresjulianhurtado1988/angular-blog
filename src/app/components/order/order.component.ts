import { Router, Params, ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import { Products } from "../../models/product";
import { OrderService } from "../../services/order.service";
import { Orders } from "../../models/order";
import { CustomerService } from "../../services/customer.service";
import { CityService } from "../../services/city.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService, CustomerService, CityService],
})
export class OrderComponent {


  public page_title: string;
//  public productos: Products;
  public status: string;
  public orders: any[];
  public order: Orders;
  public customer: any[];
  public cities: any[];
  public products: any[];
  public productos: Products;

  constructor(
    private _orderService: OrderService,
    private _customerService: CustomerService,
    private _cityService: CityService
  ){
    this.page_title = 'Registrar una orden';
    this.status = '';
    this.orders = [];
    this.order = new Orders(1, '', 0, '','', 0);
    this.productos = new Products(1, '', 0, 0,'');
    this.customer = [];
    this.cities = [];
    this.products = [];
  }


  ngOnInit(){
    this.getOrders();
    this.getCustomers();
    this.getCities();
    this.getProduct();
  }

  getOrders(){

    this._orderService.getOrders().subscribe(
      response => { 
        if (response.status == "success") {
          this.orders = response.orders;
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

    this._orderService.register(this.order).subscribe(
      response => { 
        console.log(this.order);
        if (response.status == "success") {
          this.status = response.status;
          form.reset();
          this.getOrders();
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

  getProduct(){
  
      this._orderService.getProduct().subscribe(
        response => { 
          if (response.status == "success") {
            this.products = response.product;
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


