import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { ProductComponent } from './pages/product/product.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './product-admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { CategoryComponent } from './pages/category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ListAddButtonComponent } from './components/list-add-button/list-add-button.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    ClientPageComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    DashboardPageComponent,
    LayoutPageComponent,
    OrdersPageComponent,
    CategoryListComponent,
    ProductComponent,
    CategoryComponent,
    ProductListComponent,
    ListAddButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ]
})
export class ProductAdminModule { }
