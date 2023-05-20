import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cities } from "../models/cities";
import { global } from './global';

@Injectable()
export class CustomerService {

    public url: string;

constructor(public _http: HttpClient){
    this.url = global.url;
}

register(custom:any): Observable<any>
{
    let json = JSON.stringify(custom);
    let params = 'json='+json;
 
 return this._http.post(this.url+'customer/registerCustomer', params, {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 }

getCustomers(): Observable<any>
{

 return this._http.get(this.url+'customer/showAll',  {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 }

}