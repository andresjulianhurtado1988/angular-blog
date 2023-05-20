import { Component } from '@angular/core';
import { Products } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { UpdateOrderService } from "../../services/update_order.service";
import { OrderProducts } from "../../models/orderProducts";
import { Router, Params, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css'],
  providers: [ProductService, UpdateOrderService],
})
export class UpdateOrderComponent {

  public page_title: string;
  public status: string;
  public product: any[];
  public orders: OrderProducts;
  public id_order: any;

  constructor(
    private _productService: ProductService,
    private _updateOrdertService: UpdateOrderService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.page_title = 'Registrar Producto';
    this.status = '';
    this.product = [];
  
    this._route.params.subscribe ( params => {
    this.id_order = params['id'];
    })
    this.orders = new OrderProducts(1, this.id_order, 0);

  }

  ngOnInit(){
    this.getProducts();
  }

  onSubmit(form: any){

    this._updateOrdertService.register(this.orders).subscribe(
      response => { 
        console.log(response);
        if (response.status == "success") {
          this.status = response.status;
          form.reset();
          this._router.navigate(['/ver_orden']);
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


  getProducts(){
   this._productService.getProducts().subscribe(
     response => { 
       if (response.status == "success") {
         this.product = response.product;
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


