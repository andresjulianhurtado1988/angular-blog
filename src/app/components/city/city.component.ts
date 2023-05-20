import { Component } from '@angular/core';
import { Cities } from "../../models/cities";
import { CityService } from "../../services/city.service";


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService],
})

export class CityComponent {

  public page_title: string;
  public city: Cities;
  public status: string;
  public cities: any[];
  

  constructor(
    private _cityService: CityService
  ){
    this.page_title = 'Registrar Ciudad';
    this.status = '';
    this.city = new Cities(1, '');
    this.cities = [];

  }

  ngOnInit(){
    this.getCities();
  }

  onSubmit(form: any){

     this._cityService.register(this.city).subscribe(
       response => { 
         if (response.status == "success") {
           this.status = response.status;
           form.reset();
           this.getCities();
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

   getCities(){

    this._cityService.getCities().subscribe(
      response => { 
        if (response.status == "success") {
          this.cities = response.cities;
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
