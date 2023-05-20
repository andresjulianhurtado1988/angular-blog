import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// importar componentes

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';


import { CustomerComponent } from './components/customer/customer.component';
import { CityComponent } from './components/city/city.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';



const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'cliente', component: CustomerComponent}, // cambiar al componente correcto
    {path: 'ciudades', component: CityComponent}, // cambiar al componente correcto
    {path: 'ordenes', component: OrderComponent}, // cambiar al componente correcto
    {path: 'productos', component: ProductComponent}, // cambiar al componente correcto
    {path: 'ver_orden', component: OrderDetailComponent}, // cambiar al componente correcto
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'agregar_producto/:id', component: AddProductComponent},
    {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
