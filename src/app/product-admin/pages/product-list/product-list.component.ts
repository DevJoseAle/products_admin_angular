import { Component, OnInit } from '@angular/core';
import { ProductAdminService } from '../../services/product-admin.service';
import { Product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = []
  public displayedColumns: string[] = ['id', 'name', 'category', 'price', 'isActive', 'editar', 'eliminar'];

  constructor(private http: ProductAdminService) { }

  ngOnInit(): void {

    this.http.getProducts().subscribe((newProducts) =>{
      console.log(newProducts)
      this.products = newProducts
    })

  }

  // TODO Implementar Borrado
  // (click)="onDelete(product)"
  public onDelete(product: Product): boolean {
    return true
  }

}
