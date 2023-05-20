import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cities } from "../models/cities";
import { global } from './global';

@Injectable()
export class CityService {

    public url: string;

constructor(public _http: HttpClient){
    this.url = global.url;
}


register(city:any): Observable<any>
{
    let json = JSON.stringify(city);
    let params = 'json='+json;
 
 return this._http.post(this.url+'city/registerCity', params, {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 }

 getCities(): Observable<any>
{

 return this._http.get(this.url+'city/showAll',  {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
 }

}