import { Component } from '@angular/core';
import { Products } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { OrderService } from "../../services/order.service";
import { OrderProducts } from "../../models/orderProducts";
import { Router, Params, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detail-orders',
  templateUrl: './detail-orders.component.html',
  styleUrls: ['./detail-orders.component.css'],
  providers: [OrderService, ProductService],
})
export class DetailOrdersComponent {

  public page_title: string;
  public status: string;
  public product: any[];
  public id_order: any;
  public orders_detail: any;
  public product_detail: any;
  public cantidad: any;
    
    
    constructor(
      private _productService: ProductService,
      private _ordertService: OrderService,
      private _route: ActivatedRoute,
      private _router: Router
    ){
      this.page_title = 'Detalle de la Orden';
      this.status = '';
      this.product = [];
      this.orders_detail = [];
      this.product_detail = [];
      this.cantidad = 0;
        
      this._route.params.subscribe ( params => {
        this.id_order = params['id'];
        })
    
    }
  
    ngOnInit(){
      this.getOrders();
    }
  
    getOrders(){
  
      this._ordertService.getOrder(this.id_order).subscribe(
        response => { 
          if (response.status == "success") {
            this.orders_detail = response.orders;
            this.product_detail = response.detailProducts;
            this.cantidad = response.cantidad;
          
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


