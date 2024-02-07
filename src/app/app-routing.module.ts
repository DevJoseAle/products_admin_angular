import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'admin',
    loadChildren: () => import('./product-admin/product-admin.module').then(m => m.ProductAdminModule)
  },
  {
    path:'website',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path:'**',
    redirectTo: 'admin'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
