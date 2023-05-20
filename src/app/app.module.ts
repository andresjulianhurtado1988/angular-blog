import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CustomerComponent } from './components/customer/customer.component';
import { CityComponent } from './components/city/city.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { DetailOrdersComponent } from './components/detail-orders/detail-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    CustomerComponent,
    CityComponent,
    OrderComponent,
    ProductComponent,
    OrderDetailComponent,
    AddProductComponent,
    UpdateOrderComponent,
    DetailOrdersComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
