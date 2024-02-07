import { Component, OnInit } from '@angular/core';
import { ProductAdminService } from '../../services/product-admin.service';
import { Category } from 'src/app/interfaces/category.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryListComponent implements OnInit {

  public categories: Category[] = [];
  public displayedColumns: string[] = ['id', 'name', 'createdAt', 'isActive', 'editar', 'eliminar'];

  constructor(
    private productAdminService: ProductAdminService,
    ) { }

  ngOnInit(): void {
    this.productAdminService.getCategories().subscribe((newcategory ) => {
      this.categories = newcategory
      
    })

  }

  public onDelete(category: Category): boolean {

    this.productAdminService.deleteCategory(category).subscribe(() => {
      this.productAdminService.getCategories().subscribe(( newcategory ) => {
        this.categories = newcategory
      })
    })
    return true
  }


}

