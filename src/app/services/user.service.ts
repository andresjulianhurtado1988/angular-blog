import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { global } from './global';

@Injectable()
export class UserService {

    public url: string;

constructor(public _http: HttpClient){
    this.url = global.url;
}

register(user:any): Observable<any>{
   let json = JSON.stringify(user);
   let params = 'json='+json;

//let headers ;

return this._http.post(this.url+'user/register', params, {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
}

signup(user:any, gettoken = 'null'): Observable<any>
{
    if (gettoken != 'null') {
        user.gettoken = 'true';
    } 
    let json = JSON.stringify(user);
    let params = 'json='+json;

    return this._http.post(this.url+'user/login', params, {headers:  new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})});
}

}


