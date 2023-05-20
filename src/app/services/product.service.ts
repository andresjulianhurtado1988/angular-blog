import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Products } from "../models/product";
import { global } from './global';

@Injectable()
export class ProductService {

    public url: string;

constructor(public _http: HttpClient){
    this.url = global.url;
}


register(productos:any): Observable<any>
{
    let json = JSON.stringify(productos);
    let params = 'json='+json;

 return this._http.post(this.url+'product/registerProduct', params, {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 }

 getProducts(): Observable<any>
{

 return this._http.get(this.url+'product/showAll',  {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 
}

}