import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { ProductComponent } from './pages/product/product.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'createCategory', component: CreateCategoryComponent},
      {path: 'edit/:id', component: CreateCategoryComponent},
      {path: 'category', component: CategoryListComponent},
      {path: 'category/:id', component: CategoryComponent},
      {path: 'createProduct', component: CreateProductComponent},
      {path: 'editProduct/:id', component: CreateProductComponent},
      {path: 'product', component: ProductListComponent},
      {path: 'orders', component: OrdersPageComponent},
      {path: '**', redirectTo: 'dashboard'},
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
