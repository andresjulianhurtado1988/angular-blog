import { Component } from '@angular/core';
import { Products } from "../../models/product";
import { ProductService } from "../../services/product.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})

export class ProductComponent {

  public page_title: string;
  public productos: Products;
  public status: string;
  public product: any[];

  constructor(
    private _productService: ProductService
  ){
    this.page_title = 'Registrar Producto';
    this.status = '';
    this.productos = new Products(1, '', 0, 0,'');
    this.product = [];

  }

  ngOnInit(){
    this.getProducts();
  }


  onSubmit(form: any){

    this._productService.register(this.productos).subscribe(
      response => { 
        if (response.status == "success") {
          this.status = response.status;
          form.reset();
          this.getProducts();
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
         console.log(this.product);
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
