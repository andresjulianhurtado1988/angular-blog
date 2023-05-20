import { Component } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent {

  public page_title: string;
  public user: User;
  public status: string;
  public token;
  public identity;

  constructor(
    private _userService: UserService
  ){
    this.page_title = 'Identifícate';
    this.status = '';
    this.token = '';
    this.identity = '';
    this.user = new User(1, '', '', 'Role_user', '', '', ' ', ' ');
  }

  onSubmit(form: any){
    this._userService.signup(this.user).subscribe(
      response => { 
        // devolver token
      
       if (response.status != "error") {
          this.status = "success";
          this.token = response;
          // devolver usuario identificado

          this._userService.signup(this.user, 'true').subscribe(
            response => { 
              console.log(this.token);
              console.log(this.identity);
             //   this.identity = response;
          
            },
            error => {
             //  this.status = 'error';
              console.log(<any>error);
            }
          );
          

         
       }else {
          this.status = 'error';
       }
      
      },
      error => {
       //  this.status = 'error';
        console.log(<any>error);
      }
    );

   
   }

}
