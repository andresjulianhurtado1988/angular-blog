import { Router, Params, ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import { Products } from "../../models/product";
import { OrderProducts } from "../../models/orderProducts";
import { OrderService } from "../../services/order.service";


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers: [OrderService],
})
export class OrderDetailComponent {

  public page_title: string;
//  public mis_prod: Products;
  public status: string;
  public orders: any[];
  
  
  constructor(
    private _orderService: OrderService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.page_title = 'Detalle de la orden';
    this.status = '';
    this.orders = [];
    

  }

  ngOnInit(){
    this.getOrders();
  }

  getOrders(){

    this._orderService.getOrders().subscribe(
      response => { 
        if (response.status == "success") {
          this.orders = response.orders;
          console.log(this.orders);
          
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

