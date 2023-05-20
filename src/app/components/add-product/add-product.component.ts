import { Router, Params, ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import { Products } from "../../models/product";
import { OrderProducts } from "../../models/orderProducts";
import { OrderService } from "../../services/order.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [OrderService],
})
export class AddProductComponent {

  public page_title: string;
    public status: string;
    public products: any[];
    public mis_prod: OrderProducts;  
    public order_id : any;
    public id_orden : any;
    
    constructor(
      private _orderService: OrderService,
      private _route: ActivatedRoute,
      private _router: Router
    ){
      this.page_title = 'Agregar Productos';
      this.status = '';
      this.products = [];
      this.order_id;
      this.mis_prod = new OrderProducts(1, 0, 0);
      this.id_orden;
  
    }

    ngOnInit(){
      
    }
  


  onSubmit(form: any){

    this._orderService.register(this.mis_prod).subscribe(
     
      response => { 
        console.log(this.mis_prod);
        if (response.status == "success") {
          this.status = response.status;
          form.reset();
          
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
