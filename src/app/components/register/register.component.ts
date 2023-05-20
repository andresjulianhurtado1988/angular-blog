import { Component } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],
})
export class RegisterComponent {

  public page_title: string;
  public user: User;
  public status: string;

  constructor(
    private _userService: UserService
  ){
    this.page_title = 'Regístrate';
    this.status = '';
    this.user = new User(1, '', '', 'Role_user', '', '', ' ', ' ');

  }

  onSubmit(form: any){

   // console.log(this.user);
    this._userService.register(this.user).subscribe(
      response => { 
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
