import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cities } from "../models/cities";
import { global } from './global';



@Injectable()
export class UpdateOrderService {

    public url: string;

constructor(public _http: HttpClient)
    {
    this.url = global.url;
   
}
register(order:any): Observable<any>
{
    let json = JSON.stringify(order);
    let params = 'json='+json;
   
 return this._http.post(this.url+'order/asignProducts', params, {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 }
/*
 update(order:any, id:any): Observable<any>
 {
     let json = JSON.stringify(order);
     let params = 'json='+json;
  return this._http.put(this.url+'order/updateOrder/' + id, params, {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
  }

  */


}