import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Products } from "../models/product";
import { global } from './global';

@Injectable()
export class OrderService {

    public url: string;

constructor(public _http: HttpClient){
    this.url = global.url;
}


getOrders(): Observable<any>
{

 return this._http.get(this.url+'order/showAll',  {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 
}

getOrder(id: any): Observable<any>
{

 return this._http.get(this.url+'order/showOrder/' + id,  {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 
}

getProducts(id: any): Observable<any>
{

 return this._http.get(this.url+'order/showOrder/' + id,  {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 
}

getProduct(): Observable<any>
{

 return this._http.get(this.url+'product/showAll',  {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 
}

deletePorductAsign(id: any): Observable<any>
{
    return this._http.get(this.url+'order/deleteProductsAsign/' + id,  {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});

}


register(order:any): Observable<any>
{
    let json = JSON.stringify(order);
    let params = 'json='+json;


 return this._http.post(this.url+'order/registerOrder', params, {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 }
 



}